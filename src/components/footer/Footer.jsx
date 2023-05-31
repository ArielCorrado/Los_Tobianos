import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <div className='footerCont OoS'>
            <div className='footer'>
                <div className='footerContIzq flex'>
                    <iframe className='footerMapa' src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d250649.39634932092!2d-58.70914033192668!3d-35.75898572957142!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ1JzIxLjkiUyA1OMKwMzcnMjcuMiJX!5e1!3m2!1sen!2sar!4v1685484015974!5m2!1sen!2sar" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
                </div>
                <div className='footerContDer flex column'>
                    <p className='footerTituloContato'>Contacto</p>
                    <p className='footerTextoContato'>Como LLegar</p>
                    <p className='footerTextoContato'>Teléfono</p>
                    <p className='footerTextoContato'>e-mail</p>
                    <div className='footerImgCont flex'>
                        <img src="/images/whatsapp.png" alt="whatsapp Icon" />
                        <img src="/images/facebook.png" alt="facebook Icon" />
                        <img src="/images/instagram.png" alt="Instagram Icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

