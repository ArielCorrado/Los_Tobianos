import React from 'react';
import "./reservas.css";
import "./form.css";
import Footer from '../footer/Footer';


const ReservasSeccion = () => {
      
    return (
        <>
            <div className='contSecciones seccionesIndividuales seccionReservas'>
                <h2 className='titulosSecciones titulosReservas OoS'>Tarifas</h2>
                <p className='subtitulosReservas OoS'>Consultá nuestras <br /> Tarifas y Promociones</p>
                <button className='botonReservas OoS'>Ver Detalle</button>
                <div className='rayita OoS'></div>

                <div className='contFormContacto flex column'>
                    <form action="" className='form OoS'>
                        <div className='contTituloContacto flex'><h2 className='titulosHome tituloHome-white titulo-contacto'>ENVIANOS TU CONSULTA</h2></div>
                        <input type="text" name="" className='formNom' placeholder='NOMBRE'/>
                        <input type="tel" name="" className='formTel' placeholder='APELLIDO'/>
                        <input type="email" name="" className='formEmail' placeholder='TELÉFONO'/>
                        <input type="text" name="" className='formEmpresa' placeholder='E-MAIL'/>
                        <textarea type="text" name="" className='formMsj' placeholder='MENSAJE' rows="20" cols="45" />
                    </form>
                    <div className='contBotonContacto flex OoS'><button type="button" className='botonReservas botonForm'> Enviar </button></div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default ReservasSeccion;
