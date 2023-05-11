import React from 'react';
import Header from '../header/Header';
import "./home.css"
import Galeria from '../galeria/Galeria';

const Home = () => {
    return (
        <div className='home flex column'>
           <Header/>
           <Galeria/>
        </div>
    );
}

export default Home;
