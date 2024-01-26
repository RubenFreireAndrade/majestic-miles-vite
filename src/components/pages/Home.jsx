import {Link} from 'react-router-dom';
import {IoCarSportSharp} from 'react-icons/io5';

import Carousel from '../layouts/Carousel';
import CustomerForm from '../layouts/CustomerForm';

import seaport from '../../assets/seaport.jpg';
import mercLogo from '../../assets/mercLogo.jpg';
import handOnCar from '../../assets/handOnCar2.jpg';
import heathrow from '../../assets/heathrowTerm3.jpg';
import sideFrontMerc from '../../assets/sideFrontMerc.jpg';

export default function Home({setFont}) {
    const services = [
        {name: 'One Way', image: handOnCar, link: '/oneway'},
        {name: 'Airport Transfers', image: heathrow, link: '/airports'},
        {name: 'By The Hour', image: sideFrontMerc, link: '/bythehour'},
        {name: 'Seaport Transfers', image: seaport, link: '/seaports'},
    ];

    return (
        <>
            <section className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${mercLogo})`}}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center pt-32 md:pt-40">
                    <div className="flex flex-col mb-12 items-center text-center">
                        <div className={`text-6xl text-white ${setFont} tracking-wide`} style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            YOUR PERSONAL CHAUFFEUR SERVICE
                        </div>
                        <div className={`text-lg text-white ${setFont} tracking-wide`} style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            ARRIVE IN STYLE, DEPART WITH ELEGANCE: YOUR JOURNEY, OUR PASSION!
                        </div>
                    </div>
                    <div className="bg-white md:rounded-lg shadow-lg mb-12 md:w-[50%]">
                        <CustomerForm setLabelColor={'text-mm-black'} setFont={'font-jost'} />
                    </div>
                </div>
            </section>

            <section className="mx-[10%] md:mx-[15%] my-5">
                <section>
                    <div className={`text-4xl text-center font-semibold ${setFont} tracking-wide`}>WELCOME TO MAJESTIC MILES</div>
                </section>

                <hr className="relative border-solid border-black my-6 md:mx-[20%]"></hr>

                <section>
                    <section className={`${setFont} tracking-wide`}>
                        <div className="text-3xl text-center font-semibold">Where luxury meets reliability</div>
                        <div className="my-2">
                            At Majestic Miles, we take pride in providing an unparalleled travel experience that
                            combines comfort, professionalism, and a touch of elegance.
                        </div>
                        <div className="my-2">
                            At the heart of our mission is a commitment to redefine travel by offering more than just
                            transportation. We strive to create memorable journeys, where every client feels the luxury
                            of personalized service and the peace of mind that comes with a reliable chauffeur at the
                            wheel.
                        </div>
                    </section>

                    <section className={`mt-10 ${setFont} tracking-wide`}>
                        <div className="text-3xl text-center font-semibold">Why choose Majestic Miles</div>
                        <li className="my-2">
                            <b>Experienced Chauffeurs:</b> Our team of skilled and courteous chauffeurs is handpicked
                            for their professionalism, knowledge, and dedication to providing an exceptional customer
                            experience.
                        </li>
                        <li className="my-2">
                            <b>24/7 Availability:</b> We understand that your schedule may not adhere to traditional
                            working hours. That's why we offer round-the-clock service, ensuring you have reliable
                            transportation whenever you need it.
                        </li>
                        <li className="my-2">
                            <b>Local Knowledge:</b> Benefit from the expertise of our chauffeurs who possess extensive
                            local knowledge. Whether you're a visitor or a resident, our drivers are well-versed in the
                            best routes and destinations, ensuring a smooth and efficient journey.
                        </li>
                    </section>
                </section>
            </section>

            <section className={`text-center text-4xl p-4 bg-mm-black text-white font-semibold ${setFont} tracking-wide`}>
                OUR SERVICES
                <hr className="relative border-solid border-white my-6 mx-[8%] md:mx-[40%]"></hr>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 px-10 pb-10 md:p-1 md:px-20 bg-mm-black">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`rounded overflow-hidden shadow-lg hover:opacity-80 bg-neutral-800 text-white tracking-wider h-[250px] ${setFont} tracking-wide`}>
                        <Link to={service.link}>
                            <img className="w-full h-48 object-cover" src={service.image} alt={service.name} />
                            <div className="px-6 py-4">
                                <div className="font-semibold text-xl mb-2">
                                    {service.name}{' '}
                                    <span className="text-xl" role="img" aria-label="right-arrow">
                                        &#10132;
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </>
    );
}
