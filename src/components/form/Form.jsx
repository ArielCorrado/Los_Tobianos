import React from 'react';
import "./form.css";

const Form = () => {
    return (
        <div className='contFormContacto flex column'>
            <form action="" className='form OoS'>
                <div className='contTituloContacto flex'><h2 className='titulosHome tituloHome-white titulo-contacto titulosFadeIn OoS'>ENVIANOS TU CONSULTA</h2></div>
                <input type="text" name="" className='formNom' placeholder='NOMBRE' />
                <input type="tel" name="" className='formTel' placeholder='APELLIDO' />
                <input type="email" name="" className='formEmail' placeholder='TELÉFONO' />
                <input type="text" name="" className='formEmpresa' placeholder='E-MAIL' />
                <textarea type="text" name="" className='formMsj' placeholder='MENSAJE' rows="20" cols="45" />
            </form>
            <div className='contBotonContacto flex OoS'><button type="button" className='botonForm'> Enviar </button></div>
        </div>
    );
}

export default Form;
