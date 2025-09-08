import React, { useContext, useEffect, useState, useRef } from "react";
import InfoContext from "../context/InfoContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";
import ListaRegalosContainer from "../lista-regalos/ListaRegalosContainer";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, [{ duration: 100 }]);

  return (
    <>
      <ListaRegalosContainer />

      <section className="seccion-footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;
