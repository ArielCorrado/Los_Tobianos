import React from 'react';
import "./galeria.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { IdiomaContext } from "../../context/IdiomaContext";

const Galeria = () => {
    const {isInglish} = useContext(IdiomaContext);

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
            })                                           //src={e.target.src.slice(0, -7) + ".jpg"} --> reemplaza la imagen chica por la grande
        }   
    }, []);
  
    return (
        <div className='contSecciones seccionesIndividuales'>
            <Link to="/galeria"><h2 className='titulosSecciones titulosFadeIn OoS'>{(isInglish && "Photo Gallery") || (!isInglish && "Galería")}</h2></Link>

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
            </div>

        </div>
    );
}

export default Galeria;
