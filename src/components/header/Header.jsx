import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <div className='header'>
            <img src="/images/frente.jpg" alt="Los Tobianos Frente" className='headerImg'/>
            <div className='headerContTitulo flex column'>
                <h1 className='headerTitulo'>Los Tobianos</h1>
                <img src="/images/line.png" alt="linea" className='lineaSeparadora'/>
                <h2 className='headerSubTitulo'>Una experiencia de hospedaje exclusivo en un lugar único</h2>
            </div>
        </div>
    );
}

export default Header;
