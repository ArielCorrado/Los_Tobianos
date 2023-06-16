import React from 'react';
import "./reservas.css";
import Footer from '../footer/Footer';
import Form from '../form/Form';

const ReservasSeccion = () => {
      
    return (
        <>
            <div className='contSecciones seccionesIndividuales seccionReservas'>
                <h2 className='titulosSecciones titulosReservas titulosFadeIn OoS'>Tarifas</h2>
                <p className='subtitulosReservas OoS'>Consultá nuestras <br /> Tarifas y Promociones</p>
                <button className='botonReservas OoS'>Ver Detalle</button>
                <div className='rayita OoS'></div>
                <Form/>
            </div>
            <Footer/>
        </>
    );
}

export default ReservasSeccion;
