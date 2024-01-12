import {Link} from 'react-router-dom';
import {IoCarSportSharp} from 'react-icons/io5';

import Carousel from '../layouts/Carousel';
import CustomerForm from '../layouts/CustomerForm';

import frontMerc from '../../assets/FrontMerc.jpg';
import sideFrontMerc from '../../assets/sideFrontMerc.jpg';
import frontMercBlack from '../../assets/FrontMercBlack.jpg';
import frontMercBlackTrans from '../../assets/MercBlackCar2.png';

export default function Home() {
    const images = [frontMercBlackTrans, frontMercBlack];
    const services = [
        {name: 'One Way', image: frontMercBlackTrans, link: '/oneway'},
        {name: 'Airport Transfers', image: frontMercBlack, link: '/airports'},
        {name: 'By The Hour', image: sideFrontMerc, link: '/bythehour'},
        {name: 'Seaport Transfers', image: sideFrontMerc, link: '/seaports'},
    ];

    return (
        <>
            <Carousel images={images} />

            <section className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-12 items-center">
                <section className="text-center">
                    <div className="text-6xl">YOUR PERSONAL CHAUFFEUR SERVICE</div>
                    <div className="text-lg">ARRIVE IN STYLE, DEPART WITH ELEGANCE: YOUR JOURNEY, OUR PASSION!</div>
                </section>
                <CustomerForm />
            </section>

            <section className="text-center font-bold text-[2rem] p-4 bg-mm-black text-white">Our Services</section>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 p-10 md:px-20 bg-mm-black">
                {services.map((service, index) => (
                    <div key={index} className="rounded overflow-hidden shadow-lg hover:opacity-80 bg-neutral-800 text-white h-[250px]">
                        <Link to={service.link}>
                            <img className="w-full h-48 object-cover" src={service.image} alt={service.name} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{service.name}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </>
    );
}
