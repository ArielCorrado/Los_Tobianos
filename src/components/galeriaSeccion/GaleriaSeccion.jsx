import React from 'react';
import "./galeriaSeccion.css";
import { useEffect, useState } from 'react';
import Footer from '../footer/Footer';

const GaleriaSeccion = () => {

    const [imageZoom, setImageZoom] = useState();

    useEffect(() => {
        const imagenesGaleria = document.getElementsByClassName("contImgGaleria")

        const logo = document.createElement("img");
        logo.src = "/images/logo.png";
        logo.setAttribute("class", "logoImagenes");
        
        for (const imagen of imagenesGaleria) {
            imagen.addEventListener("mouseover", (e) => {
                e.target.parentNode.appendChild(logo);
            })
            imagen.addEventListener("mouseout", (e) => {
                e.target.parentNode.querySelector(".logoImagenes").remove();
            })
            imagen.addEventListener("click", (e) => {
                document.body.style.overflow = "hidden";
                setImageZoom(<div className='contImgZoom flex' onClick={() => {setImageZoom(); document.body.style.overflow = "visible";}}>
                                <img className='zoomGaleriaClose' src="/images/close.png" alt="Icono Close" />
                                <img className='imgZoom' src={e.target.src.slice(0, -7) + ".jpg"} alt="Imagen Los Tobianos" /> 
                            </div>);
            })
        }
    }, []);
  
    return (
        <>
            <div className='contSecciones seccionGaleria seccionesIndividuales'>
                <h2 className='titulosSecciones titulosFadeIn OoS'>Galería</h2>

                {imageZoom}

                <div className='galeria flex wrap'>

                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_1min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_4min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_5min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_6min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_7min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_8min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_9min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_10min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_11min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_12min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_2min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_3min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_13min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_14min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_15min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_16min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_17min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_18min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_19min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_20min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_21min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_22min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_23min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_24min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_25min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_26min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_27min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_28min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_29min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_30min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_31min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_32min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_33min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_34min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_35min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_36min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_37min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_38min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_39min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_40min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_41min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_42min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_43min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_44min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_45min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_46min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_47min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_48min.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_49min.jpg" alt="Los Tobianos Galería" /></div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default GaleriaSeccion;
