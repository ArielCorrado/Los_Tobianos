import React from 'react';
import "./form.css";
import formHTML from './formHTMLToMail';
import { useContext } from 'react';
import { IdiomaContext } from "../../context/IdiomaContext";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Form = () => {

    const {isInglish} = useContext(IdiomaContext);
    const navigate = useNavigate();

    const sendForm = async () => {
        
        const form = document.querySelector(".form");
        const formdatos = new FormData(form);
        const datos = Object.fromEntries(formdatos);

        if (datos.nombre.trim() === "" || datos.apellido.trim() === "" || datos.telefono.trim() === "" || datos.email.trim() === "" || datos.mensaje.trim() === "") {
            Swal.fire({
                title: "Ops!",
                text: (isInglish && "Missing to enter some data") || (!isInglish && "Falta ingresar algún dato"),
                icon: 'error',
                confirmButtonColor: '#93855b',
                confirmButtonText: 'OK'
            });
            return;
        }

        const resp = await fetch(process.env.REACT_APP_URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({mensaje: formHTML(datos.nombre, datos.apellido, datos.telefono, datos.email, datos.mensaje)})
        })

        const respOBJ = await resp.json();  
            
        if (respOBJ.success) {
            Swal.fire({
                title: (isInglish && "Message sent succesfully") || (!isInglish && "Mensaje enviado con éxito"),
                icon: 'success',
                confirmButtonColor: '#93855b',
                confirmButtonText: (isInglish && "Home") || (!isInglish && "Inicio")
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/");
                } else {
                    window.location.reload();
                }
            })
        } else {
            Swal.fire({
                title: (isInglish && "Error sending message") || (!isInglish && "Error al enviar el mensaje"),
                text: `${respOBJ.msg}`,
                icon: 'error',
                confirmButtonColor: '#93855b',
                confirmButtonText: 'OK'
            });
        }                  
    }

    return (
        
        <div className='contFormContacto flex column'>
            <form className='form OoS' action="/api/contacto.php" method="POST" acceptCharset="UTF-8">
                <div className='contTituloContacto flex'><h2 className='titulosHome tituloHome-white titulo-contacto titulosFadeIn OoS'>{(isInglish && "SEND US YOUR QUERY") || (!isInglish && "ENVIANOS TU CONSULTA")}</h2></div>
                <input type="text" name="nombre" className='formNom' placeholder={(isInglish && "NAME") || (!isInglish && "NOMBRE")} />
                <input type="text" name="apellido" className='formTel' placeholder={(isInglish && "LAST NAME") || (!isInglish && "APELLIDO")} />
                <input type="tel" name="telefono" className='formEmail' placeholder={(isInglish && "PHONE") || (!isInglish && "TELÉFONO")} />
                <input type="email" name="email" className='formEmpresa' placeholder='E-MAIL' />
                <textarea type="text" name="mensaje" className='formMsj' placeholder={(isInglish && "MESSAGE") || (!isInglish && "MENSAJE")} rows="20" cols="45" />
                <div className='contBotonContacto flex OoS'><button type="button" className='botonForm' onClick={sendForm}>{(isInglish && "SEND") || (!isInglish && "ENVIAR")}</button></div>
            </form>
        </div>
    );
}

export default Form;
