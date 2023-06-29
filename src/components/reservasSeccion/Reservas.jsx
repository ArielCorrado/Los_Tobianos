import React from 'react';
import "./reservas.css";
import Footer from '../footer/Footer';
import Form from '../form/Form';
import { useContext } from 'react';
import { IdiomaContext } from "../../context/IdiomaContext";

const ReservasSeccion = () => {
    const {isInglish} = useContext(IdiomaContext);
      
    return (
        <>
            <div className='contSecciones seccionesIndividuales seccionReservas'>
                <h2 className='titulosSecciones titulosReservas titulosFadeIn OoS'>{(isInglish && "RATES") || (!isInglish && "TARIFAS")}</h2>
                <p className='subtitulosReservas OoS'>{(isInglish && "Check our") || (!isInglish && "Consultá nuestras")} <br /> {(isInglish && "Rates and promotions") || (!isInglish && "Tarifas y promociones")}</p>
                <button className='botonReservas OoS'>{(isInglish && "See detail") || (!isInglish && "Ver Detalle")}</button>
                <div className='rayita OoS'></div>
                <Form/>
            </div>
            <Footer/>
        </>
    );
}

export default ReservasSeccion;
