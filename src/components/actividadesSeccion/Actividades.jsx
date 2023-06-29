import React from 'react';
import "./actividades.css";
import Footer from '../footer/Footer';
import { useContext } from 'react';
import { IdiomaContext } from "../../context/IdiomaContext";

const Actividades = () => {

    const {isInglish} = useContext(IdiomaContext);
      
    return (
        <>
            <div className='contSecciones seccionesIndividuales seccionActividades'>
                <h2 className='titulosSecciones titulosReservas titulosFadeIn OoS'>{(isInglish && "Activities") || (!isInglish && "Actividades")}</h2>
                <p className='actividadesTextos OoS'>
                    <span className='actividadesTextosTitulo'>{(isInglish && "Municipal Thermal Park:") || (!isInglish && "Parque Termal Municipal:")}</span> 
                    { 
                      (isInglish && <>This complex of thermal pools and spa is one of the main tourist attractions of General Belgrano. Visitors can enjoy the thermal waters in a relaxed and natural environment.</>)
                      ||  
                      (!isInglish && <>Este complejo de piscinas termales y spa es uno de los principales atractivos turísticos de General Belgrano. Los visitantes pueden disfrutar de las aguas termales en un ambiente relajado y natural.</>)
                    } 
                </p>
                <div className='rayita rayitaActividades OoS'></div>

                <p className='actividadesTextos OoS'>
                    <span className='actividadesTextosTitulo'>{(isInglish && "Municipal Museum and Historical Archive:") || (!isInglish && "Museo y Archivo Histórico Municipal:")}</span> 
                    { 
                      (isInglish && <>This museum offers a detailed insight into the history of the city, from its origins to the present day. It features a vast collection of artifacts and historical documents that illustrate the evolution of the city over time.</>)
                      ||  
                      (!isInglish && <>Este museo ofrece una visión detallada de la historia de la ciudad, desde sus orígenes hasta la actualidad. Cuenta con una amplia colección de artefactos y documentos históricos que ilustran la evolución de la ciudad a lo largo del tiempo.</>)
                    } 
                </p>
                <div className='rayita rayitaActividades OoS'></div>

                <p className='actividadesTextos OoS'>
                    <span className='actividadesTextosTitulo'>{(isInglish && "National Dulce de Leche Festival:") || (!isInglish && "Festival Nacional del Dulce de Leche:")}</span>
                    { 
                      (isInglish && <>This annual festival, celebrated in October, attracts visitors from across the country to enjoy the local production of this popular sweet treat. The event includes a variety of activities, including tastings, contests, and shows.</>)
                      ||  
                      (!isInglish && <>Este festival anual, que se celebra en octubre, atrae a visitantes de todo el país para disfrutar de la producción local de este popular dulce. El evento cuenta con una variedad de actividades, incluyendo degustaciones, concursos y espectáculos.</>)
                    } 
                </p>
                <div className='rayita rayitaActividades OoS'></div>
                
                <p className='actividadesTextos OoS'>
                    <span className='actividadesTextosTitulo'>{(isInglish && "Hiking and Walking:") || (!isInglish && "Senderismo y caminatas:")}</span>
                    { 
                      (isInglish && <>The area of General Belgrano is rich in natural landscapes and green areas, making it an ideal destination for hiking and walking. Visitors can explore the area through different routes and trails that offer panoramic views of the region.</>)
                      ||  
                      (!isInglish && <>La zona de General Belgrano es rica en paisajes naturales y áreas verdes, lo que la convierte en un destino ideal para practicar senderismo y caminatas. Los visitantes pueden explorar la zona a través de diferentes rutas y senderos que ofrecen vistas panorámicas de la región.</>)
                    } 
                </p>
                <div className='rayita rayitaActividades OoS'></div>

                <p className='actividadesTextos OoS'>
                    <span className='actividadesTextosTitulo'>{(isInglish && "Local Gastronomy:") || (!isInglish && "Gastronomía local:")}</span>
                    { 
                      (isInglish && <>General Belgrano is known for its agricultural and livestock production, which means that its local cuisine is varied and tasty. Visitors can enjoy typical dishes of the region, such as meat empanadas, homemade sausages, and desserts made with dulce de leche.</>)
                      ||  
                      (!isInglish && <>General Belgrano es conocida por su producción agrícola y ganadera, lo que significa que su gastronomía local es variada y sabrosa. Los visitantes pueden disfrutar de platos típicos de la región, como las empanadas de carne, los chorizos caseros y los postres a base de dulce de leche.</>)
                    }     
                </p>
                <div className='rayita rayitaActividades OoS'></div>
            </div>
            <Footer/>
        </>
    );
}

export default Actividades;
