import React from 'react';
import "./losTobianos.css";
import { useEffect } from 'react';

const LosTobianos = () => {

    useEffect(() => {
        const igualarAlturasLosTobianos = () => {
            const filas = document.getElementsByClassName("filaLosTobianos")
            for (const fila of filas) {
                fila.lastChild.style.height = fila.firstChild.offsetHeight + "px";
            }
        }
        window.addEventListener("resize", igualarAlturasLosTobianos);
        igualarAlturasLosTobianos();
    }, []);
     
        
    return (
        <div className='contSecciones'>
            <h2 className='titulosSecciones OoS'>Los Tobianos</h2>
            <div className='contTextoYfotosTobianos flex column'>

                <div className='filaLosTobianos flex'>
                    <div className='divTextoTobianos flex OoS'>
                        <p className='textoTobianos flex'>                   
                            En Los Tobianos, te ofrecemos una experiencia de hospedaje exclusivo en un lugar único, ubicado en General Belgrano, al norte de la Provincia de Buenos Aires, a solo 120 km de la Ciudad Autónoma de Buenos Aires. <br /><br />
                            Nuestro espacio cuenta con un casco principal de arquitectura colonial de época y adiciones modernas, con habitaciones luminosas y acogedoras, equipadas con chimeneas para crear un ambiente cálido en las noches más frescas. 
                        </p> 
                    </div>
                    <div className='divImagenTobianos flex OoS'>
                        <img className='imgTobianos' src="/images/los_tobianos_galeria_1.jpg" alt="Los Tobianos Imagen" />
                    </div>
                </div>

                <div className='filaLosTobianos flex invert'>
                   <div className='divTextoTobianos flex OoS'>
                        <p className='textoTobianos flex'>                   
                            En Los Tobianos, también te ofrecemos una amplia variedad de actividades para disfrutar del estilo de vida en el campo, como paseos en bicicleta y senderismo, además de la posibilidad de probar deliciosas comidas típicas de campo, como pan de campo y tortas fritas. <br /><br />
                            También te recomendamos visitar el pueblo cercano, donde podrás explorar su arquitectura y cultura local. 
                        </p> 
                    </div>
                    <div className='divImagenTobianos flex OoS'>
                        <img className='imgTobianos' src="/images/los_tobianos_galeria_10.jpg" alt="Los Tobianos Imagen" />
                    </div>
                </div>

                <div className='filaLosTobianos flex'>
                   <div className='divTextoTobianos flex OoS'>
                        <p className='textoTobianos flex'>                   
                            Nuestra ubicación alejada de las luces de la ciudad permite disfrutar de un cielo nocturno estrellado y de la luna llena en todo su esplendor. Además, nuestro espacio cuenta con una hermosa pileta al aire libre donde podrás disfrutar de un refrescante chapuzón en los días más calurosos del verano. <br /><br />
                            Si buscas una experiencia auténtica y exclusiva en un ambiente tranquilo y acogedor, vení y descubrí todo lo que Los Tobianos tiene para ofrecer. Reservá ahora y disfrutá de una experiencia única y memorable en nuestro espacio exclusivo de hospedaje en General Belgrano, Provincia de Buenos Aires. 
                        </p> 
                    </div>
                    <div className='divImagenTobianos flex OoS'>
                        <img className='imgTobianos' src="/images/los_tobianos_galeria_11.jpg" alt="Los Tobianos Imagen" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LosTobianos;
