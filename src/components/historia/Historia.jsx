import React from 'react';
import "./historia.css";
import { useState } from 'react';

const Historia = () => {
    const [show, setShow] = useState(false);
                
    return (
        <div className='contSecciones'>
            <h2 className='titulosSecciones OoS'>Historia</h2>
            <div className='historaTextoCont OoS'>
                <div className='historiaTexto'>
                    <p className='OoS'>La Estancia "Los Tobianos" es un lugar lleno de historia y tradición ubicado al sur de la Provincia de Buenos Aires, en General Belgrano, a tan solo 18 km del pintoresco pueblo. Su nombre hace referencia al pelaje característico presente en varias razas de caballos, el cual exhibe marcas tipo pinto. A lo largo de los años, esta estancia ha sido testigo de diversos acontecimientos que han marcado su identidad y la de sus alrededores.</p> <br />
                    <p className='OoS'>La historia de "Los Tobianos" se remonta al período en que esta zona pertenecía a los campos de Juan Manuel de Rosas, un influyente personaje de la historia argentina. Durante aquella época, el territorio era utilizado principalmente para actividades ganaderas y agrícolas. En ese contexto, uno de los antiguos dueños de la estancia fue el conocido como "manco Giribone". Este peculiar personaje era reconocido por su destreza a caballo, a pesar de su discapacidad. Los Tobianos, en honor a su antiguo propietario, cuenta con una particularidad única: está sembrado de escalones de cemento que solían ser utilizados por Giribone para poder montarse con facilidad.</p> <br />
                    <p className='OoS'>Además de su conexión con el pasado de la región, la estancia "Los Tobianos" también desempeñó un papel destacado en el desarrollo económico de la zona. Fue una de las primeras áreas de la provincia de Buenos Aires en incursionar en la producción de trigo, convirtiéndose en una de las zonas trigueras más importantes de la región. Este hito marcó un antes y un después en la economía local y dejó una huella perdurable en la identidad de la estancia.</p> <br />
                    { !show && <div className='flex'><button className='botones' onClick={() => setShow(!show)}>Leer Mas</button></div> }

                    { show &&
                        <>   
                            <p>Asimismo, General Belgrano, la localidad cercana a la estancia, es famosa por ser un lugar donde el deporte del Pato es muy popular. Este deporte tradicional argentino, considerado uno de los más antiguos del país, consiste en un juego ecuestre en el que dos equipos compiten por llevar una pelota de cuero a través de arcos utilizando un bastón llamado "mallet". Además, General Belgrano cuenta con aguas termales, lo cual es una de las atracciones adicionales del balneario local junto con la pesca en el Río Salado.</p> <br />
                            <p>La estancia "Los Tobianos" se encuentra estratégicamente ubicada cerca del campo argentino de pato, a tan solo 4 km, y su proximidad al Río Salado y las aguas termales de General Belgrano la convierten en un destino privilegiado para los amantes de la naturaleza, la tradición y el deporte. Es un lugar que ofrece una combinación única de actividades como la pesca, los paseos en bote, la práctica del Pato y el disfrute de las aguas termales, todo en un entorno histórico y encantador.</p> <br />
                            <p>Por lo tanto, la estancia "Los Tobianos" no solo es un hermoso rincón de la Provincia de Buenos Aires, sino también un lugar lleno de historia y encanto. Desde su conexión con el pasado de la época de Juan Manuel de Rosas hasta su papel en el desarrollo económico de la región, esta estancia ha dejado una marca indeleble en su entorno. Su ubicación estratégica cerca del campo argentino de pato, las aguas termales de General Belgrano y las actividades al aire libre, hacen de "Los Tobianos" un destino único que combina naturaleza, tradición y deporte.</p> <br />
                            <div className='flex'><button className='botones' onClick={() => setShow(!show)}>Ver Menos</button></div>
                        </>
                    }
                </div>
            </div>   
        </div>
    );
}

export default Historia;
