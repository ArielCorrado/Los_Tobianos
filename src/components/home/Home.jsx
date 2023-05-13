import React from 'react';
import Header from '../header/Header';
import "./home.css"
import Galeria from '../galeria/Galeria';
import LosTobianos from '../losTobianos/LosTobianos';

const Home = () => {
    return (
        <div className='home flex column'>
           <Header/>
           <LosTobianos/>
           <Galeria/>
        </div>
    );
}

export default Home;
