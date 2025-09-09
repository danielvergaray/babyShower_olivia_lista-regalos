import React from "react";
import ListaRegalos from "./ListaRegalos";

const ListaRegalosContainer = () => {
  const generarId = () => {
    return String(Math.floor(100000 + Math.random() * 900000));
  };

  const regalos = [
    {
      nombre: "Cuna corral",
      linkWeb:
        "https://www.falabella.com.pe/falabella-pe/product/21108050/Cuna-Colecho-Bebe-Joie-Kubbie-Sleep-Foggy-Gray/21108050",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757438972/baby_shower_olivia-regalos/cuna_colecho_vsgh4j.png",
      disponible: "no",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Saquito de dormir",
      linkWeb:
        "https://www.falabella.com.pe/falabella-pe/product/883426212/Saco-De-Dormir-Bebe-Nino-Nina-Algodon-Yamp/883426215?kid=shopp69fc&gad_source=1&gad_campaignid=21209754652&gbraid=0AAAAADs9MO17vkeo1qlNIfLOBmfTL8fY4&gclid=CjwKCAjw1ozEBhAdEiwAn9qbzbZl5I5kzybwD3KeS6FjsBQemi0OW3Go0ogw9ouhI-FwR6nq8vmKvhoCubIQAvD_BwE&gclsrc=aw.ds",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416599/baby_shower_olivia-regalos/saco_dormir_hrppjy.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Mantas de algodón",
      linkWeb: "https://mumandcompany.com/products/manta-total-beige",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416596/baby_shower_olivia-regalos/manta_algodon_jsgvnx.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Mantas gruesas",
      linkWeb:
        "https://wawapima.pe/producto/manta-reversible-plush-jackard-beige/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757438927/baby_shower_olivia-regalos/manta_gruesa_fctele.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Mantas de invierno",
      linkWeb: "https://moyoandme.com/products/manta-azul",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756417692/baby_shower_olivia-regalos/manta_invierno_rlv49m.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Sábanas",
      linkWeb:
        "https://www.mellowthebabybrand.com/products/copia-de-sabana-bajera-blanca-100-algodon-pima?_pos=4&_psq=sabana&_ss=e&_v=1.0",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416598/baby_shower_olivia-regalos/sabana_bajera_cbnh0h.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Almohada de lactancia",
      linkWeb:
        "https://acolchonaditos.com/producto/cojin-de-lactancia/?fbclid=PAQ0xDSwLjW69leHRuA2FlbQIxMQABp1y9M7UPv6k7Odai_zlX2xfPXVlCfefPllKX1ro3xI3Bf8Q6lH2U4J3ysACy_aem_pOCJHBAXBN2DPXagZe-xUg",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757342176/baby_shower_olivia-regalos/almohada-lactancia_a4buzm.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Extractor manual de leche",
      linkWeb:
        "https://www.maternelle.pe/products/medela-harmony-extractor-manual",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757438766/baby_shower_olivia-regalos/extractor_leche_b19333.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Biberón Natural",
      linkWeb:
        "https://infanti.com.pe/collections/biberones-chupones-y-tetinas/products/biberon-natural-response-3-0-3oz-120ml-flow-2-0m",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757438508/baby_shower_olivia-regalos/biberon__bs4xbe.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Recipientes para leche",
      linkWeb:
        "https://infanti.com.pe/products/recipiente-leche-180ml-x-5-pcs-avnt?",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757437979/baby_shower_olivia-regalos/recipiente_leche_aivwtd.png",

      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Cepillo para limpiar biberon",
      linkWeb:
        "https://infanti.com.pe/products/16020-escobilla-limpia-biberones-y-tetinas?variant=51140567400748&country=PE&currency=PEN&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google_ads&utm_medium=paid_cpc&utm_campaign=pmax_avent&utm_content=&utm_term=&gadid=&gad_source=1&gad_campaignid=20040388200&gbraid=0AAAAApjVbcgXeQjCFIFNPoK0WhcS4O2-h&gclid=CjwKCAjwtfvEBhAmEiwA-DsKjiGklywhTva1d6KpfeBPY4CQUjS5GANqApIVK5LrlSZCPHSzm1chlBoCX34QAvD_BwE",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757438716/baby_shower_olivia-regalos/cepillo_biberon_ijolre.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Silla de comer portatil",
      linkWeb:
        "https://www.carestino.com.pe/producto/silla-de-comer-osaka-booster-gris/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757438356/baby_shower_olivia-regalos/silla_comer_ajjz4j.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Babero de silicona",
      linkWeb:
        "https://versatino.com/products/babero-versatino-4?variant=46195167232224",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757438871/baby_shower_olivia-regalos/babero_silicona_dmtgly.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Hombreras",
      linkWeb: "https://www.babylabperu.com/product/hombreras-menta-pack-x-3/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416596/baby_shower_olivia-regalos/hombreras_r9bune.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Babitas",
      linkWeb:
        "https://www.babylabperu.com/product/babitas-sunny-garden-salmon-pack-x-3/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416593/baby_shower_olivia-regalos/babitas_dctygc.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Hamaca o soporte para Bañera",
      linkWeb:
        "https://infanti.com.pe/products/acb010-hamaca-para-banera-bubbles?",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757438447/baby_shower_olivia-regalos/hamacas_kwwxmi.jpg",
      disponible: "no",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Toallas con capucha",
      linkWeb: "https://www.babylabperu.com/product/toalla-mush-mush-rosa/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416599/baby_shower_olivia-regalos/toallas_yx7tsi.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Carrito Organizador",
      linkWeb:
        "https://simple.ripley.com.pe/organizador-sashija-blanco-ruedas-3-niveles-jk3-oficina-pmp20000703644?",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757343164/baby_shower_olivia-regalos/carrito-organizador_vuuhie.png",
      link: "",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Cesto Organizador",
      linkWeb:
        "https://moyoandme.com/products/organizador-rectangular-gris-melange",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416597/baby_shower_olivia-regalos/organizador_tos7ab.jpg",
      link: "",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Alfombra plegable o mat",
      linkWeb:
        "https://www.carestino.com.pe/producto/alfombra-antigolpes-reversible-plegable-180x200-paseo/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757438820/baby_shower_olivia-regalos/alfombra_zjng3n.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Kit cuidado personal p/bebé",
      linkWeb:
        "https://nua.pe/products/set-de-cuidado-6-pcs-verde-saro?variant=44263403323565&country=PE&currency=PEN&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_campaign=gs-2022-06-08&utm_source=google&utm_medium=smart_campaign&gad_source=1&gad_campaignid=17507599119&gbraid=0AAAAAogFDNx9caNPwO6MvSaY9_8PlrqIa&gclid=Cj0KCQjwn8XFBhCxARIsAMyH8BuemA3X7v9stmJTE2mmiKpzLHwvRbZRWBosEbe4WNFIXj5wA7zIx-EaAsiUEALw_wcB",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757343308/baby_shower_olivia-regalos/kit-cuidado_zupf2n.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Alfombra plegable",
      linkWeb: "https://noia.pe/products/noia-mat-espacial-exterior-azul",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757438186/baby_shower_olivia-regalos/alfombra-plegable_dsjhcc.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Pañalera",
      linkWeb:
        "https://bubbabags.com.pe/products/mochila-travel-cabina-pre-sale-copia?variant=44259457532054",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757437869/baby_shower_olivia-regalos/panialera_lekyqk.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Estuche para pañitos humedos",
      linkWeb:
        "https://infanti.com.pe/products/234151-estuche-para-panitos-humedos-gris?variant=46836644249900&country=PE&currency=PEN&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google_ads&utm_medium=paid_cpc&utm_campaign=pmax_brand&utm_content=&utm_term=&gadid=&gad_source=1&gad_campaignid=20006232690&gbraid=0AAAAApjVbcjmMAFxz-k8sVYrZNobESTjv&gclid=Cj0KCQjw8KrFBhDUARIsAMvIApYDdLtiBqNlrq-kL04dlM6biU--MYdoP0qCyLdLbR5yVS69XN75rJAaAiYkEALw_wcB?",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1757438661/baby_shower_olivia-regalos/estuche_panito_v6hnvb.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
    {
      nombre: "Cambiador de pañales portatil",
      linkWeb:
        "https://www.mellowthebabybrand.com/products/mat-mini?variant=46583534977263",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416594/baby_shower_olivia-regalos/cambiador_panales_lynjhb.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
      dedicatoria: "",
    },
  ];

  const textos = [
    {
      tituloPrincipal:
        "mira las opciones de esta lista. escoge y reserva el regalo que quieras darle a olivia",
      tituloReserva:
        "elegista algo muy especial, confirma si quiers reservarlo",
      botonInfo: "ver info",
      botonReservar: "reservar regalo",
      botonConfirmarReserva: "confirma reserva",
      mensajeAgradecimiento:
        "gracias por reservar este regalo. recuerda comprarlo antes del evento",
    },
  ];

  return <ListaRegalos regalos={regalos} textosArray={textos} />;
};

export default ListaRegalosContainer;
