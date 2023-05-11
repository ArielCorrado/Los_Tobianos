import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import "../src/components/generalStyles.css";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
