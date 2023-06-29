import React from 'react';
import "./historia.css";
import { useState } from 'react';
import { useContext } from 'react';
import { IdiomaContext } from "../../context/IdiomaContext";

const Historia = () => {
    const [show, setShow] = useState(false);
    const {isInglish} = useContext(IdiomaContext);
                
    return (
        <div className='contSecciones'>
            <h2 className='titulosSecciones titulosFadeIn OoS'>{(isInglish && "History") || (!isInglish && "Historia")}</h2>
            <div className='historaTextoCont OoS'>
                <div className='historiaTexto'>
                    {
                    
                    (isInglish 
                    &&
                    <>    
                        <p className='OoS'>Los Tobianos" is a place full of history and tradition located in the southern part of the Buenos Aires Province, in General Belgrano, just 18 km away from the picturesque town. Its name refers to the characteristic coat color found in several horse breeds, which displays pinto-like markings. Throughout the years, this estancia has witnessed various events that have shaped its identity and that of its surroundings.</p> <br />
                        <p className='OoS'>The history of "Los Tobianos" dates back to the period when this area belonged to the fields of Juan Manuel de Rosas, an influential figure in Argentine history. During that time, the territory was mainly used for livestock and agricultural activities. In that context, one of the former owners of the estancia was known as "manco Giribone" (Giribone the one-handed). This peculiar character was recognized for his horsemanship skills despite his disability. In honor of its former owner, Los Tobianos has a unique feature: it is dotted with cement steps that Giribone used to easily mount his horse.</p> <br />
                        <p className='OoS'>In addition to its connection to the region's past, "Los Tobianos" also played a prominent role in the economic development of the area. It was one of the first areas in the Buenos Aires Province to venture into wheat production, becoming one of the most important wheat-growing regions in the area. This milestone marked a turning point in the local economy and left a lasting imprint on the identity of the estancia.</p> <br />
                        
                        { !show && <div className='flex'><button className='botones' onClick={() => setShow(!show)}>Read more</button></div> }

                        { 
                        show &&
                            <>   
                                <p>Furthermore, General Belgrano, the town near the estancia, is famous for being a place where the sport of Pato is highly popular. This traditional Argentine sport, considered one of the oldest in the country, involves an equestrian game where two teams compete to carry a leather ball through goals using a stick called a "mallet." Additionally, General Belgrano is known for its thermal waters, which is one of the additional attractions of the local resort along with fishing in the Salado River.</p> <br />
                                <p>"Los Tobianos" is strategically located near the Argentine polo field, just 4 km away, and its proximity to the Salado River and the thermal waters of General Belgrano make it a privileged destination for nature lovers, tradition, and sports enthusiasts. It is a place that offers a unique combination of activities such as fishing, boat rides, playing Pato, and enjoying the thermal waters, all in a historical and charming setting.</p> <br />
                                <p>Therefore, "Los Tobianos" is not only a beautiful corner of the Buenos Aires Province but also a place full of history and charm. From its connection to the era of Juan Manuel de Rosas to its role in the economic development of the region, this estancia has left an indelible mark on its surroundings. Its strategic location near the Argentine polo field, the thermal waters of General Belgrano, and outdoor activities make "Los Tobianos" a unique destination that combines nature, tradition, and sports.</p> <br />
                                <div className='flex'><button className='botones' onClick={() => setShow(!show)}>See less</button></div>
                            </>
                        }
                    </>)
                            
                    ||        

                    (!isInglish 
                    &&
                    <>    
                        <p className='OoS'>La Estancia "Los Tobianos" es un lugar lleno de historia y tradición ubicado al sur de la Provincia de Buenos Aires, en General Belgrano, a tan solo 18 km del pintoresco pueblo. Su nombre hace referencia al pelaje característico presente en varias razas de caballos, el cual exhibe marcas tipo pinto. A lo largo de los años, esta estancia ha sido testigo de diversos acontecimientos que han marcado su identidad y la de sus alrededores.</p> <br />
                        <p className='OoS'>La historia de "Los Tobianos" se remonta al período en que esta zona pertenecía a los campos de Juan Manuel de Rosas, un influyente personaje de la historia argentina. Durante aquella época, el territorio era utilizado principalmente para actividades ganaderas y agrícolas. En ese contexto, uno de los antiguos dueños de la estancia fue el conocido como "manco Giribone". Este peculiar personaje era reconocido por su destreza a caballo, a pesar de su discapacidad. Los Tobianos, en honor a su antiguo propietario, cuenta con una particularidad única: está sembrado de escalones de cemento que solían ser utilizados por Giribone para poder montarse con facilidad.</p> <br />
                        <p className='OoS'>Además de su conexión con el pasado de la región, la estancia "Los Tobianos" también desempeñó un papel destacado en el desarrollo económico de la zona. Fue una de las primeras áreas de la provincia de Buenos Aires en incursionar en la producción de trigo, convirtiéndose en una de las zonas trigueras más importantes de la región. Este hito marcó un antes y un después en la economía local y dejó una huella perdurable en la identidad de la estancia.</p> <br />
                        
                        { !show && <div className='flex'><button className='botones' onClick={() => setShow(!show)}>Leer Mas</button></div> }

                        { 
                        show &&
                            <>   
                                <p>Asimismo, General Belgrano, la localidad cercana a la estancia, es famosa por ser un lugar donde el deporte del Pato es muy popular. Este deporte tradicional argentino, considerado uno de los más antiguos del país, consiste en un juego ecuestre en el que dos equipos compiten por llevar una pelota de cuero a través de arcos utilizando un bastón llamado "mallet". Además, General Belgrano cuenta con aguas termales, lo cual es una de las atracciones adicionales del balneario local junto con la pesca en el Río Salado.</p> <br />
                                <p>La estancia "Los Tobianos" se encuentra estratégicamente ubicada cerca del campo argentino de pato, a tan solo 4 km, y su proximidad al Río Salado y las aguas termales de General Belgrano la convierten en un destino privilegiado para los amantes de la naturaleza, la tradición y el deporte. Es un lugar que ofrece una combinación única de actividades como la pesca, los paseos en bote, la práctica del Pato y el disfrute de las aguas termales, todo en un entorno histórico y encantador.</p> <br />
                                <p>Por lo tanto, la estancia "Los Tobianos" no solo es un hermoso rincón de la Provincia de Buenos Aires, sino también un lugar lleno de historia y encanto. Desde su conexión con el pasado de la época de Juan Manuel de Rosas hasta su papel en el desarrollo económico de la región, esta estancia ha dejado una marca indeleble en su entorno. Su ubicación estratégica cerca del campo argentino de pato, las aguas termales de General Belgrano y las actividades al aire libre, hacen de "Los Tobianos" un destino único que combina naturaleza, tradición y deporte.</p> <br />
                                <div className='flex'><button className='botones' onClick={() => setShow(!show)}>Ver Menos</button></div>
                            </>
                        }
                    </>)

                    }
                </div>
            </div>   
        </div>
    );
}

export default Historia;
