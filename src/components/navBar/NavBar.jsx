import { useEffect} from "react";
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { useContext } from 'react';
import { IdiomaContext } from "../../context/IdiomaContext";
import "./navBar.css";

const NavBar = () => {
    
    /*************************************************************** OoS *******************************************************************/

    const thisLocation = useLocation();

    useEffect(() => {
        const elements = document.getElementsByClassName("OoS");            //Para que al cargar la página se produzca el efecto de OoS (Opacity on Scroll) sin hacer scroll
        setTimeout(() => {
            for (const element of elements) {                                       
                if (element.getBoundingClientRect().top < window.innerHeight) {     
                    element.classList.add("OoSS");
                    if (element.getAttribute("class").includes("titulosFadeIn")) {
                        element.classList.add("fadeInTitulos");
                    }
                };
            };
        }, 100);
        window.addEventListener("scroll", () => {
            for (const element of elements) {
                if (element.getBoundingClientRect().top < window.innerHeight) { //Efecto opacity on scroll
                    element.classList.add("OoSS");
                    element.classList.add("OoSS");
                    if (element.getAttribute("class").includes("titulosFadeIn")) {
                        element.classList.add("fadeInTitulos");
                    }
                };
            };
        });
    }, [thisLocation]);    

    /*************************************************************** Menú ******************************************************************/

    
    useEffect(() => {
        const iconoMenu = document.querySelector(".iconoMenu");
        const menu = document.querySelector(".menu");
        const opciones = document.getElementsByClassName("opcion");
        let initialWidth = window.innerWidth;
        let REM;
        let breakPoint;
        let menuBajo = false;
        let flagEnterMenuToggle = true;
        iconoMenu.addEventListener("click", () => {                         //Manejo de clases para bajar y subir menu
            if (flagEnterMenuToggle) {
                flagEnterMenuToggle = false;
                if (!menuBajo) {
                    menu.classList.remove("menuSube", "menuBaja");
                    menu.classList.add("menuBaja");
                    menuBajo = !menuBajo;    
                    const animations = document.getAnimations();
                    animations[0].addEventListener("finish", () => {
                        flagEnterMenuToggle = true;
                    })
                } else {
                    menu.classList.remove("menuBaja", "menuSube");
                    menu.classList.add("menuSube");
                    menuBajo = !menuBajo;  
                    const animations = document.getAnimations();
                    animations[0].addEventListener("finish", () => {
                        flagEnterMenuToggle = true;
                    })
                }
            }
        })

        const calcularREM = () => {
            if (window.innerWidth >= window.innerHeight) REM = 0.01 * window.innerHeight + 10;
            if (window.innerWidth < window.innerHeight) REM = 0.01 * window.innerWidth + 10;
            breakPoint = 65 * REM;
        }
         
        calcularREM();
        if(window.innerWidth < breakPoint) {                                        //Cargamos página con un ancho menor a BreakPoint
            menu.classList.add("iconoMenuON", "menuOFF");
            iconoMenu.classList.add("iconoMenuON");
            for (const opcion of opciones) {
                opcion.classList.add("opcion2");
            }
        }
        
        window.addEventListener("resize", () => {                                   //Manejo de clases al hacer resize o cambio de orientacion
            calcularREM();           
            if(initialWidth < breakPoint && window.innerWidth > breakPoint) {       //Pasamos de un ancho de pantalla menor a breakPoint a uno mayor
                menu.classList.remove("menuSube", "menuBaja", "menuOFF");
                iconoMenu.classList.remove("iconoMenuON");
                for (const opcion of opciones) {
                    opcion.classList.remove("opcion2");
                }
                menuBajo = false;
                initialWidth = window.innerWidth;
            }     
            if(initialWidth > breakPoint && window.innerWidth < breakPoint) {       //Pasamos de un ancho de pantalla mayor a breakPoint a uno menor
                menu.classList.add("menuOFF");
                iconoMenu.classList.add("iconoMenuON");
                for (const opcion of opciones) {
                    opcion.classList.add("opcion2");
                }
                initialWidth = window.innerWidth;
            }     
        })

        window.addEventListener("click", (e) => {                                   //Cerramos en menu desplegado al hacer click en cualquier lado menos en el icono de menu
            if (e.target.getAttribute("name") !== "iconoMenu" && menuBajo === true) {
                menu.classList.remove("menuBaja", "menuSube");
                menuBajo = false;
            }
        })

    }, []);    

    const {isInglish, setSpanish, setInglish} = useContext(IdiomaContext);

    return (
        <div className="contMenu flex">
            <div>
                <div className="navBarContLogoEidioma flex">
                    <Link to="/" className="navBarContLogo"><img src="images/logo.png" alt="Logo Los Tobianos" className="navBarLogo" /></Link>
                    {(isInglish && <p className="navBarIdiomaOpc" onClick={() => {setSpanish()}}>Spanish</p>) || (!isInglish && <p className="navBarIdiomaOpc" onClick={() => {setInglish()}}>English</p>)}
                </div>
            </div>
            {/* <div className="navBarTelefono flex"><span className="navBarTelefono549">+54 9 &nbsp;</span><span>11 40869822</span></div> */}
            <img className="iconoMenu" src="/images/menu.png" alt="Icono Menu" name="iconoMenu"/>
            <div className="tapaMenu"></div>
            <div className="menu flex" name="menu">
                <HashLink className="opcion flex" to="/#top">{(isInglish && "Home") || (!isInglish && "Home")}</HashLink>
                <HashLink className="opcion flex" to="/galeria#top">{(isInglish && "Photo Gallery") || (!isInglish && "Galería")}</HashLink>
                <HashLink className="opcion flex" to="/actividades#top">{(isInglish && "Activities") || (!isInglish && "Actividades")}</HashLink>
                <HashLink className="opcion flex" to="/reservas#top">{(isInglish && "Rates and Reservations") || (!isInglish && "Tarifas y Reservas")}</HashLink>
                <HashLink className="opcion flex" to="/contacto#top">{(isInglish && "Contact Us") || (!isInglish && "Contacto")}</HashLink>
            </div>
        </div>
    )  
}   

export default NavBar;
