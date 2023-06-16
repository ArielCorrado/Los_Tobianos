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
                                <img className='imgZoom' src={e.target.src} alt="Imagen Los Tobianos" /> 
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

                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_1.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_4.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_5.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_6.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_7.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_8.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_9.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_10.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_11.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_12.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_2.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_3.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_13.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_14.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_15.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_16.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_17.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_18.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_19.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_20.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_21.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_22.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_23.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_24.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_25.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_26.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_27.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_28.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_29.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_30.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_31.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_32.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_33.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_34.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_35.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_36.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_37.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_38.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_39.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_40.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_41.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_42.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_43.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_44.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_45.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_46.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_47.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_48.jpg" alt="Los Tobianos Galería" /></div>
                    <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/galeria/los_tobianos_galeria_49.jpg" alt="Los Tobianos Galería" /></div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default GaleriaSeccion;
