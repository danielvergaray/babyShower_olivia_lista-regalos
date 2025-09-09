import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import PopUpCreator from "../modal/PopUpCreator";
import InfoContext from "../context/InfoContext";
import { Spinner } from "react-bootstrap";

const ListaRegalos = ({ regalos, textosArray }) => {
  const { informacion, setUserData, userData, loading, setLoading } =
    useContext(InfoContext);
  const { imagenes } = informacion;
  const [listaRegalos, setListaRegalos] = useState([]);
  const textos = textosArray[0];
  const [show, setShow] = useState(false);
  const [infoRegaloSelected, setInfoRegaloSelected] = useState({
    nombre: "",
    link: "",
    imagen: "",
    id: "",
  });

  const handleRegalo = (regaloSelected) => {
    setInfoRegaloSelected(regaloSelected);
    setUserData({
      ...userData,
      idRegalo: regaloSelected.id,
      regaloEscogido: regaloSelected.nombre,
      linkRegalo: regaloSelected.linkWeb,
    });
    console.log(userData);
    setShow(true);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  /* ASI SE HA CREADO LOS PRODUCTOS EN LA BASE DE DATOS */
  const addDataToFirebase = () => {
    const db = getFirestore();

    const collectionRef = collection(db, "lista-regalos");

    for (let item of regalos) {
      addDoc(collectionRef, item)
        .then((res) => console.log(res.id))
        .catch((err) => console.log(err));
    }
  };

  /* Para actualizar lista regalos  */
  useEffect(() => {
    const db = getFirestore();
    const listaRegalosRef = collection(db, "lista-regalos");

    const q = query(listaRegalosRef, orderBy("nombre", "asc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const listaActualizada = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setListaRegalos(listaActualizada);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <div className="seccion-listaRegalos">
      {show && (
        <PopUpCreator
          show={show}
          tipoModal="lista-regalos"
          setShow={setShow}
          infoRegaloSelected={infoRegaloSelected}
        />
      )}

      {/* Para agregar productos */}

      {/* <button onClick={addDataToFirebase}>agregar productos</button> */}

      <div className="hero-imagenCabecera">
        <img src={imagenes.imagenCabecera} alt="imagen-carpa" />
      </div>
      <div className="seccion-listaRegalos-titulo">
        <div className="seccion-listaRegalos-imagen">
          <img src={imagenes.iconoCupcakePan} alt="icono-cupcakePan" />
        </div>
        <p>{textos.tituloPrincipal}</p>
      </div>

      {loading ? (
        <div className="home-spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="seccion-listaRegalos-regalos">
            {listaRegalos.map((regalo, index) => (
              <div key={index} className="seccion-listaRegalos-CadaRegalo">
                {regalo.disponible === "si" ? (
                  <>
                    <div className="seccion-listaRegalos-CadaRegalo_imagen">
                      <img src={regalo.linkImagen} alt="imagen_regalo" />
                      <div className="CadaRegalo_imagen-etiqueta etiquetaDisponible">
                        <button>DISPONIBLE</button>
                      </div>
                    </div>
                    <div className="seccion-listaRegalos-nombre">
                      <p>{regalo.nombre}</p>
                    </div>
                    <div className="seccion-listaRegalos-CadaRegalo_botones">
                      <Link to={regalo.linkWeb} target="_blank">
                        <button className="btn-verInfo">
                          {textos.botonInfo}
                        </button>
                      </Link>

                      <div>
                        <button
                          className="btn-reservar"
                          onClick={() => handleRegalo(regalo)}
                        >
                          {textos.botonReservar}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="seccion-listaRegalos-CadaRegalo_imagen ">
                      <img
                        className="imagenRegalo-noDisponible"
                        src={regalo.linkImagen}
                        alt="imagen_regalo"
                      />
                      <div className="CadaRegalo_imagen-etiqueta etiquetaNoDisponible">
                        <button>RESERVADO</button>
                      </div>
                    </div>
                    <div className="seccion-listaRegalos-nombre">
                      <p className="nombre-noDisponible">{regalo.nombre}</p>
                    </div>
                    <div className="seccion-listaRegalos-CadaRegalo_botones">
                      <button className="btn-desactivado">
                        {textos.botonInfo}
                      </button>
                      <button className="btn-desactivado">
                        {textos.botonReservar}
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ListaRegalos;
