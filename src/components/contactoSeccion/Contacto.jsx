import React from 'react';
import "./contacto.css";
import Footer from '../footer/Footer';
import Form from '../form/Form';

const Contacto = () => {
      
    return (
        <>
            <div className='contSecciones seccionesIndividuales seccionReservas'>
                <Form/>
            </div>
            <Footer/>
        </>
    );
}

export default Contacto;
