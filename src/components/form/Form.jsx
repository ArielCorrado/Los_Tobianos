import React from 'react';
import "./form.css";

const Form = () => {
    return (
        <div className='contFormContacto flex column'>
            <form className='form OoS' action="/send/contacto.php" method="POST" acceptCharset="UTF-8">
                <div className='contTituloContacto flex'><h2 className='titulosHome tituloHome-white titulo-contacto titulosFadeIn OoS'>ENVIANOS TU CONSULTA</h2></div>
                <input type="text" name="name" className='formNom' placeholder='NOMBRE' />
                <input type="text" name="" className='formTel' placeholder='APELLIDO' />
                <input type="tel" name="" className='formEmail' placeholder='TELÉFONO' />
                <input type="email" name="email" className='formEmpresa' placeholder='E-MAIL' />
                <textarea type="text" name="msg" className='formMsj' placeholder='MENSAJE' rows="20" cols="45" />
                <div className='contBotonContacto flex OoS'><button type="submit" className='botonForm'> Enviar </button></div>
            </form>
        </div>
    );
}

export default Form;
