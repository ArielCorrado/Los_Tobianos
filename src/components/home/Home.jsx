import React from 'react';
import Header from '../header/Header';
import "./home.css"
import Galeria from '../galeria/Galeria';
import LosTobianos from '../losTobianos/LosTobianos';
import Footer from '../footer/Footer';
import Historia from '../historia/Historia';

const Home = () => {
    return (
        <div className='home flex column'>
           <Header/>
           <LosTobianos/>
           <Galeria/>
           <Historia/>
           <Footer/>
        </div>
    );
}

export default Home;
