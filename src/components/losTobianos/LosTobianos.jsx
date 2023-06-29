import React from 'react';
import "./losTobianos.css";
import { useEffect } from 'react';
import { useContext } from 'react';
import { IdiomaContext } from "../../context/IdiomaContext";

const LosTobianos = () => {
    const {isInglish} = useContext(IdiomaContext);

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
            <h2 className='titulosSecciones titulosFadeIn OoS'>Los Tobianos</h2>
            <div className='contTextoYfotosTobianos flex column'>

                <div className='filaLosTobianos flex'>
                    <div className='divTextoTobianos flex OoS'>
                        <p className='textoTobianos flex'>      
                            {(isInglish 
                            && 
                            <> 
                                At Los Tobianos, we offer you an exclusive lodging experience in a unique place located in General Belgrano, in the northern part of the Buenos Aires Province, just 120 km away from the Autonomous City of Buenos Aires. <br /><br />
                                Our space features a main house with colonial-era architecture and modern additions, with bright and cozy rooms equipped with fireplaces to create a warm ambiance during cooler nights.
                            </>
                            ) 
                            || 
                            (!isInglish 
                            && 
                            <>
                                En Los Tobianos, te ofrecemos una experiencia de hospedaje exclusivo en un lugar único, ubicado en General Belgrano, al norte de la Provincia de Buenos Aires, a solo 120 km de la Ciudad Autónoma de Buenos Aires. <br /><br />
                                Nuestro espacio cuenta con un casco principal de arquitectura colonial de época y adiciones modernas, con habitaciones luminosas y acogedoras, equipadas con chimeneas para crear un ambiente cálido en las noches más frescas.
                            </>
                            )}             
                        </p> 
                    </div>
                    <div className='divImagenTobianos flex OoS'>
                        <img className='imgTobianos' src="/images/galeria/los_tobianos_galeria_1.jpg" alt="Los Tobianos Imagen" />
                    </div>
                </div>

                <div className='filaLosTobianos flex invert'>
                   <div className='divTextoTobianos flex OoS'>
                        <p className='textoTobianos flex'>      
                            {(isInglish 
                            && 
                            <> 
                                At Los Tobianos, we also offer you a wide variety of activities to enjoy the countryside lifestyle, such as bike rides and hiking, in addition to the opportunity to try delicious typical country dishes, such as country bread and fried cakes.<br /><br />
                                We also recommend visiting the nearby town, where you can explore its architecture and local culture.
                            </>
                            ) 
                            || 
                            (!isInglish 
                            && 
                            <>
                                En Los Tobianos, también te ofrecemos una amplia variedad de actividades para disfrutar del estilo de vida en el campo, como paseos en bicicleta y senderismo, además de la posibilidad de probar deliciosas comidas típicas de campo, como pan de campo y tortas fritas. <br /><br />
                                También te recomendamos visitar el pueblo cercano, donde podrás explorar su arquitectura y cultura local. 
                            </>
                            )}             
                        </p>             
                    </div>
                    <div className='divImagenTobianos flex OoS'>
                        <img className='imgTobianos' src="/images/galeria/los_tobianos_galeria_10.jpg" alt="Los Tobianos Imagen" />
                    </div>
                </div>

                <div className='filaLosTobianos flex'>
                   <div className='divTextoTobianos flex OoS'>
                        <p className='textoTobianos flex'>      
                            {(isInglish 
                            && 
                            <> 
                                Our remote location away from city lights allows you to enjoy a starry night sky and the full moon in all its splendor. Additionally, our space features a beautiful outdoor pool where you can enjoy a refreshing dip on the hottest summer days.<br /><br />
                                If you're looking for an authentic and exclusive experience in a peaceful and secluded environment, come and discover everything Los Tobianos has to offer. Book now and enjoy a unique and memorable experience in our exclusive lodging space in General Belgrano, Buenos Aires Province.
                            </>
                            ) 
                            || 
                            (!isInglish 
                            && 
                            <>
                                Nuestra ubicación alejada de las luces de la ciudad permite disfrutar de un cielo nocturno estrellado y de la luna llena en todo su esplendor. Además, nuestro espacio cuenta con una hermosa pileta al aire libre donde podrás disfrutar de un refrescante chapuzón en los días más calurosos del verano. <br /><br />
                                Si buscas una experiencia auténtica y exclusiva en un ambiente tranquilo y acogedor, vení y descubrí todo lo que Los Tobianos tiene para ofrecer. Reservá ahora y disfrutá de una experiencia única y memorable en nuestro espacio exclusivo de hospedaje en General Belgrano, Provincia de Buenos Aires.    
                            </>
                            )}             
                        </p>              
                    </div>
                    <div className='divImagenTobianos flex OoS'>
                        <img className='imgTobianos' src="/images/galeria/los_tobianos_galeria_11.jpg" alt="Los Tobianos Imagen" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LosTobianos;
