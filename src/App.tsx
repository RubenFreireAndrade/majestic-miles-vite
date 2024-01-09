import './App.css';
import {Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import Footer from './components/layouts/Footer';
import NavBar from './components/layouts/NavBar';
import OneWay from './components/pages/OneWay';
import Airport from './components/pages/Airport';
import ByTheHour from './components/pages/ByTheHour';
import SeaportTransfers from './components/pages/Seaport';

export default function App() {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path='/home' element={<Home />} /> */}
                <Route path="/services" element={<Services />} />
                <Route path="/oneway" element={<OneWay />} />
                <Route path="/airports" element={<Airport />} />
                <Route path="/bythehour" element={<ByTheHour />} />
                <Route path="/seaport" element={<SeaportTransfers />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </>
    );
}
