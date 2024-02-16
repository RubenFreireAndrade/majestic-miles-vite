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
import Booking from './components/pages/Booking';
import Success from './components/pages/redirect/Success';
import Failed from './components/pages/redirect/Failed';

import {FormDataProvider} from './utils/FormDataContext';

export default function App() {
    const font = 'font-jost';
    return (
        <>
            <NavBar setFont={font} />

            <FormDataProvider>
                <Routes>
                    <Route path="/" element={<Home setFont={font} />} />
                    <Route path="/oneway" element={<OneWay setFont={font} />} />
                    <Route path="/airports" element={<Airport setFont={font} />} />
                    <Route path="/bythehour" element={<ByTheHour setFont={font} />} />
                    <Route path="/seaports" element={<SeaportTransfers setFont={font} />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/about" element={<About setFont={font} />} />
                    <Route path="/contact" element={<Contact setFont={font} />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/failed" element={<Failed />} />
                </Routes>
            </FormDataProvider>

            <Footer setFont={font} />
        </>
    );
}
