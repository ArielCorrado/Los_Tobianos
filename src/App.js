import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import "../src/components/generalStyles.css";
import GaleriaSeccion from './components/galeriaSeccion/GaleriaSeccion';
import ReservasSeccion from './components/reservasSeccion/Reservas';
import Actividades from './components/actividadesSeccion/Actividades';
import Contacto from './components/contactoSeccion/Contacto';

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/galeria" element={<GaleriaSeccion/>} />
                    <Route path="/reservas" element={<ReservasSeccion/>} />
                    <Route path="/actividades" element={<Actividades/>} />
                    <Route path="/contacto" element={<Contacto/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
