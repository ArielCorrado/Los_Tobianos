import React from 'react';
import "./actividades.css";
import Footer from '../footer/Footer';


const Actividades = () => {
      
    return (
        <>
            <div className='contSecciones seccionesIndividuales seccionActividades'>
                <h2 className='titulosSecciones titulosReservas titulosFadeIn OoS'>Actividades</h2>
                <p className='actividadesTextos OoS'><span className='actividadesTextosTitulo'>Parque Termal Municipal:</span> Este complejo de piscinas termales y spa es uno de los principales atractivos turísticos de General Belgrano. Los visitantes pueden disfrutar de las aguas termales en un ambiente relajado y natural.</p>
                <div className='rayita rayitaActividades OoS'></div>
                <p className='actividadesTextos OoS'><span className='actividadesTextosTitulo'>Museo y Archivo Histórico Municipal:</span> Este museo ofrece una visión detallada de la historia de la ciudad, desde sus orígenes hasta la actualidad. Cuenta con una amplia colección de artefactos y documentos históricos que ilustran la evolución de la ciudad a lo largo del tiempo.</p>
                <div className='rayita rayitaActividades OoS'></div>
                <p className='actividadesTextos OoS'><span className='actividadesTextosTitulo'>Festival Nacional del Dulce de Leche:</span> Este festival anual, que se celebra en octubre, atrae a visitantes de todo el país para disfrutar de la producción local de este popular dulce. El evento cuenta con una variedad de actividades, incluyendo degustaciones, concursos y espectáculos.</p>
                <div className='rayita rayitaActividades OoS'></div>
                <p className='actividadesTextos OoS'><span className='actividadesTextosTitulo'>Senderismo y caminatas:</span> La zona de General Belgrano es rica en paisajes naturales y áreas verdes, lo que la convierte en un destino ideal para practicar senderismo y caminatas. Los visitantes pueden explorar la zona a través de diferentes rutas y senderos que ofrecen vistas panorámicas de la región.</p>
                <div className='rayita rayitaActividades OoS'></div>
                <p className='actividadesTextos OoS'><span className='actividadesTextosTitulo'>Gastronomía local:</span> General Belgrano es conocida por su producción agrícola y ganadera, lo que significa que su gastronomía local es variada y sabrosa. Los visitantes pueden disfrutar de platos típicos de la región, como las empanadas de carne, los chorizos caseros y los postres a base de dulce de leche.</p>
                <div className='rayita rayitaActividades OoS'></div>
                

            </div>
            <Footer/>
        </>
    );
}

export default Actividades;
