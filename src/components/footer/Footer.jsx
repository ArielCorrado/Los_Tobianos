import React from 'react';
import "./footer.css";
import { useContext } from 'react';
import { IdiomaContext } from "../../context/IdiomaContext";

const Footer = () => {
    const {isInglish} = useContext(IdiomaContext);

    return (
        <div className='footerCont OoS'>
            <div className='footer'>
                <div className='footerContIzq flex'>
                    <iframe className='footerMapa' src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d250649.39634932092!2d-58.70914033192668!3d-35.75898572957142!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ1JzIxLjkiUyA1OMKwMzcnMjcuMiJX!5e1!3m2!1sen!2sar!4v1685484015974!5m2!1sen!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
                </div>
                <div className='footerContDer flex column'>
                    <div className='footerLineaDatos flex'><p className='footerTituloContato footerTituloDato'>{(isInglish && "Contact Us") || (!isInglish && "Contacto")}</p> </div>
                    <div className='footerLineaDatos flex'><p className='footerTextoContato footerTituloDato'>{(isInglish && "How to get") || (!isInglish && "Como llegar")}</p> </div>
                    <div className='footerLineaDatos flex'><p className='footerTextoContato footerTituloDato'>{(isInglish && "Phone:") || (!isInglish && "Teléfono:")}</p> </div>
                    <div className='footerLineaDatos flex'><p className='footerTextoContato footerTituloDato'>e-mail:</p> <p className='footerTextoContato footerDato'>info@estancialostobianos.com.ar</p></div>
                    <div className='footerImgCont flex'>
                        <a href="https://www.instagram.com/estancialostobianos/" target='_blank' rel="noreferrer"><img src="/images/instagram.png" alt="Instagram Icon" /></a>
                        <img src="/images/whatsapp.png" alt="whatsapp Icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

