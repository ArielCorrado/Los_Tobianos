import React from 'react';
import "./galeria.css";
import { useEffect, useState } from 'react';

const Galeria = () => {

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
            <h2 className='titulosSecciones'>Galería</h2>

            {imageZoom}

            <div className='galeria flex wrap'>

                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_1.jpg" alt="Los Tobianos Galería" /></div>
                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_4.jpg" alt="Los Tobianos Galería" /></div>
                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_5.jpg" alt="Los Tobianos Galería" /></div>
                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_6.jpg" alt="Los Tobianos Galería" /></div>
                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_7.jpg" alt="Los Tobianos Galería" /></div>
                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_8.jpg" alt="Los Tobianos Galería" /></div>
                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_9.jpg" alt="Los Tobianos Galería" /></div>
                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_10.jpg" alt="Los Tobianos Galería" /></div>
                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_11.jpg" alt="Los Tobianos Galería" /></div>
                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_12.jpg" alt="Los Tobianos Galería" /></div>
                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_2.jpg" alt="Los Tobianos Galería" /></div>
                <div className='contImgGaleria OoS'><img className='imgGaleria' src="/images/los_tobianos_galeria_3.jpg" alt="Los Tobianos Galería" /></div>
            </div>

        </>
    );
}

export default Galeria;
