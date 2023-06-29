import React from 'react';
import "./form.css";
import { useContext } from 'react';
import { IdiomaContext } from "../../context/IdiomaContext";

const Form = () => {
    const {isInglish} = useContext(IdiomaContext);

    return (
        <div className='contFormContacto flex column'>
            <form className='form OoS' action="/api/contacto.php" method="POST" acceptCharset="UTF-8">
                <div className='contTituloContacto flex'><h2 className='titulosHome tituloHome-white titulo-contacto titulosFadeIn OoS'>{(isInglish && "SEND US YOUR QUERY") || (!isInglish && "ENVIANOS TU CONSULTA")}</h2></div>
                <input type="text" name="name" className='formNom' placeholder={(isInglish && "NAME") || (!isInglish && "NOMBRE")} />
                <input type="text" name="" className='formTel' placeholder={(isInglish && "LAST NAME") || (!isInglish && "APELLIDO")} />
                <input type="tel" name="" className='formEmail' placeholder={(isInglish && "PHONE") || (!isInglish && "TELÉFONO")} />
                <input type="email" name="email" className='formEmpresa' placeholder='E-MAIL' />
                <textarea type="text" name="msg" className='formMsj' placeholder={(isInglish && "MESSAGE") || (!isInglish && "MENSAJE")} rows="20" cols="45" />
                <div className='contBotonContacto flex OoS'><button type="submit" className='botonForm'>{(isInglish && "SEND") || (!isInglish && "ENVIAR")}</button></div>
            </form>
        </div>
    );
}

export default Form;
