import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InfoContext from "../context/InfoContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const PopUpCreator = ({ show, setShow, infoRegaloSelected }) => {
  const {
    getUserDedicatoria,
    iconoHornoPanes,
    getUserDataName,
    usuarioAprobado,
    userData,
    setUserData,
    setLoading,
    handleEnviar,
  } = useContext(InfoContext);
  const [listaRegalosSection, setListaRegalosSection] = useState("");
  const [showInputDedicatoria, setShowInputDedicatoria] = useState(false);
  const [isButtonListaRegalosDisabled, setIsButtonListaRegalosDisabled] =
    useState(true);
  const handleClose = () => {
    setShow(false);
  };

  const handleCloseListaRegalos = () => {
    setShow(false);
    setLoading(true);
    setShowInputDedicatoria(false);
    setListaRegalosSection("");
    setUserData((prev) => ({
      ...prev,
      nombre: "",
      dedicatoria: "",
    }));
  };
  const handleSiguienteButton = () => {
    setListaRegalosSection("confirmacionRegalo");
  };
  const handleListaRegaloEnviarButton = () => {
    setListaRegalosSection("agradecimiento");
    handleEnviar();
  };

  useEffect(() => {
    if (usuarioAprobado) {
      setIsButtonListaRegalosDisabled(false);
    } else {
      setIsButtonListaRegalosDisabled(true);
    }
  }, [usuarioAprobado]);

  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <>
          {listaRegalosSection === "confirmacionRegalo" ? (
            <div className="modal-listaRegalos modal-listaRegalos-confirmacion ">
              <Modal.Header>
                <IoCloseCircleOutline onClick={handleCloseListaRegalos} />
              </Modal.Header>

              <Modal.Body>
                <div className="listaRegalos-confirmacion-titulo">
                  <p>ingresa tu nombre para completar la reserva</p>
                </div>
                <div className="seccion-formulario-regalos">
                  <form action="">
                    <input
                      type="text"
                      name="nombre"
                      pattern="^[a-zA-Z ]*$" // Acepta solo letras (mayúsculas y minúsculas) y espacios
                      title="Solo se permiten letras (mayúsculas y minúsculas) y espacios"
                      placeholder="NOMBRE Y APELLIDO"
                      onChange={getUserDataName}
                      required
                    />
                  </form>
                  <p className="formulario-icono">
                    {!usuarioAprobado && userData.nombre.length > 0 ? (
                      <IoMdCloseCircle />
                    ) : usuarioAprobado && userData.nombre.length > 0 ? (
                      <FaCheckCircle />
                    ) : null}
                  </p>
                </div>

                {usuarioAprobado && (
                  <p
                    onClick={() => setShowInputDedicatoria(true)}
                    className="modal-listaRegalos-linkDedicatoria"
                  >
                    ¿Deseas agregar una dedicatoria?
                  </p>
                )}
                {showInputDedicatoria && usuarioAprobado && (
                  <div className="form-dedicatoria">
                    <form onChange={getUserDedicatoria}>
                      <input
                        name="dedicatoria"
                        type="text"
                        placeholder="Escribe tu mensaje"
                      />
                    </form>
                  </div>
                )}
                <button
                  className={
                    isButtonListaRegalosDisabled ? "disabledButton" : null
                  }
                  disabled={isButtonListaRegalosDisabled}
                  onClick={handleListaRegaloEnviarButton}
                >
                  enviar
                </button>
              </Modal.Body>
            </div>
          ) : listaRegalosSection === "agradecimiento" ? (
            <div className="modal-listaRegalos modal-listaRegalos-confirmacion agradecimiento">
              <Modal.Header>
                <IoCloseCircleOutline onClick={handleCloseListaRegalos} />
              </Modal.Header>

              <Modal.Body>
                <img src={iconoHornoPanes} alt="icono-varios" />

                <p>
                  gracias por reservar este regalo recuerda comprarlo antes del
                  evento
                </p>
              </Modal.Body>
            </div>
          ) : (
            <div className="modal-listaRegalos">
              <Modal.Header>
                <IoCloseCircleOutline onClick={handleCloseListaRegalos} />
              </Modal.Header>

              <Modal.Body>
                <div className="listaRegalos-imagen">
                  <img
                    src={infoRegaloSelected.linkImagen}
                    alt="imagen-regalo"
                  />
                  <p>{infoRegaloSelected.nombre}</p>
                </div>
                <div className="listaRegalos-texto">
                  <p>
                    elegiste algo muy especial. presiona siguiente para
                    continuar
                  </p>
                  <button onClick={handleSiguienteButton}>siguiente</button>
                </div>
              </Modal.Body>
            </div>
          )}
        </>
      </Modal>
    </>
  );
};

export default PopUpCreator;
