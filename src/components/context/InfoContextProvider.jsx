import React, { useEffect, useState } from "react";
import InfoContext from "./InfoContext";
import cabeceraImagen from "../../assets/imagenes/Cabecera.png";
import iconoCroissant from "../../assets/imagenes/iconos/croissant.png";
import iconoCupcakePan from "../../assets/imagenes/iconos/cupcakeypan.png";
import iconoHornoPanes from "../../assets/imagenes/iconos/hornoypanes.png";
import iconoMuffin from "../../assets/imagenes/iconos/muffin.png";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  updateDoc,
} from "firebase/firestore";
import "aos/dist/aos.css";

const InfoContextProvider = ({ children }) => {
  const informacion = {
    imagenes: {
      imagenCabecera: cabeceraImagen,
      iconoCroissant: iconoCroissant,
      iconoCupcakePan: iconoCupcakePan,
      iconoHornoPanes: iconoHornoPanes,
    },
  };

  /* ANIMACIONES */

  const animacionEntrada = "fade-in";
  const duracionAnimacion1 = "3000";

  /* FORMULARIO */

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    nombre: "",
    idRegalo: "",
    regaloEscogido: "",
    dedicatoria: "",
    linkRegalo: "",
  });

  const getUserDedicatoria = (event) => {
    if (usuarioAprobado) {
      setUserData({
        ...userData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const getUserDataName = (event) => {
    const { name, value } = event.target;
    // Eliminar números, caracteres especiales y acentos utilizando una expresión regular
    const sanitizedValue = value
      .replace(/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    setUserData({ ...userData, [name]: sanitizedValue });
  };

  /* Esta parte se usa para que se verifique el nombre del usuario letra a letra */

  const [usuarioAprobado, setUsuarioAprobado] = useState(false);

  useEffect(() => {
    const db = getFirestore();

    const nombreMinusculas = userData.nombre.toLowerCase().split(" ").join("");

    const invitadosFirebase = collection(db, "invitados");
    const buscarInvitado = query(
      invitadosFirebase,
      where("nombre", "==", nombreMinusculas)
    );
    getDocs(buscarInvitado)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const docRef = querySnapshot.docs[0].ref; //accede al primer documento devuelto en la consulta y devuelve una referencia del documento.
          const existingData = querySnapshot.docs[0].data(); //evuelve los datos del documento en forma de objeto
          setUsuarioAprobado(true);
        } else {
          setUsuarioAprobado(false);
        }
      })

      .then(() => {
        // Limpiar los campos después de enviar
        /*  setUserData({
        nombre: "",
        respuesta: "",
        mensaje: "",
      }); */
      })
      .catch((error) => {
        console.error("Error al enviar datos a Firebase: ", error);
      })
      .finally(() => {
        /* setLoading(false); */
      });
  }, [userData.nombre]);

  /* ---------------------------------- */

  const scrollToTop = () => {
    // Realiza el desplazamiento suave
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* Seleccion regalo enviada */
  const handleEnviar = async () => {
    const db = getFirestore();
    const listaRegalosRef = collection(db, "lista-regalos");

    try {
      const querySnapshot = await getDocs(
        query(listaRegalosRef, where("id", "==", userData.idRegalo))
      );
      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;

        await updateDoc(docRef, {
          disponible: "no",
          comprador: userData.nombre,
          dedicatoria: userData.dedicatoria || "",
        });
      } else {
        console.warn("No se encontró un regalo con ese id");
      }
    } catch (error) {
      console.error("Error al enviar datos a Firebase: ", error);
    } finally {
      setUserData({
        nombre: "",
        dedicatoria: "",
        idRegalo: "",
        regaloEscogido: "",
      });
    }
  };

  /* ---------------- */

  const values = {
    informacion,
    loading,
    getUserDedicatoria,
    getUserDataName,
    setUserData,
    userData,
    animacionEntrada,
    duracionAnimacion1,
    usuarioAprobado,
    iconoMuffin,
    iconoHornoPanes,
    setLoading,
    handleEnviar,
  };

  return (
    <InfoContext.Provider value={values}> {children} </InfoContext.Provider>
  );
};

export default InfoContextProvider;
