import './App.css';
import {Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home';
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
            <NavBar setFont={'font-jost'} />

            <Routes>
                <Route path="/" element={<Home setFont={'font-jost'} />} />
                <Route path="/oneway" element={<OneWay setFont={'font-jost'} />} />
                <Route path="/airports" element={<Airport setFont={'font-jost'} />} />
                <Route path="/bythehour" element={<ByTheHour setFont={'font-jost'} />} />
                <Route path="/seaports" element={<SeaportTransfers setFont={'font-jost'} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer setFont={'font-jost'} />
        </>
    );
}
