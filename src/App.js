import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import "../src/components/generalStyles.css";
import GaleriaSeccion from './components/galeriaSeccion/GaleriaSeccion';

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/galeria" element={<GaleriaSeccion/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
