import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import "../src/components/generalStyles.css";
import GaleriaSeccion from './components/galeriaSeccion/GaleriaSeccion';
import ReservasSeccion from './components/reservasSeccion/Reservas';

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/galeria" element={<GaleriaSeccion/>} />
                    <Route path="/reservas" element={<ReservasSeccion/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
