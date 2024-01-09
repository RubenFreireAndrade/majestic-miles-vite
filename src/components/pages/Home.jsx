import {Link} from 'react-router-dom';
import {IoCarSportSharp} from 'react-icons/io5';

import Carousel from '../layouts/Carousel';

import frontMerc from '../../assets/FrontMerc.jpg';
import sideFrontMerc from '../../assets/sideFrontMerc.jpg';
import frontMercBlack from '../../assets/FrontMercBlack.jpg';
import frontMercBlackTrans from '../../assets/MercBlackCar2.png';
import CustomerForm from '../layouts/CustomerForm';

export default function Home() {
    const images = [frontMercBlackTrans, frontMercBlack];

    return (
        <>
            <Carousel images={images} />

            <section className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-12 items-center">
                <section className="text-center">
                    <div className="text-[2rem]">YOUR PERSONAL CHAUFFEUR SERVICE</div>
                    THIS IS THE SECTION FOR WHAT MM IS SELLING. DO THIS BY DEMONSTRATING WHAT COMES WITH WHEN ORDERING
                    MAJESTIC MILES.
                </section>
                <CustomerForm />
            </section>

            <section className="text-center font-bold text-[2rem] p-4 bg-mm-black text-white">Our Services</section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-4 md:mx-12 mb-12 items-center">
                <div className="flex flex-col md:flex-row">
                    <IoCarSportSharp className="flex-shrink-0 w-full md:w-auto md:mr-6" size={'3rem'} />
                    <div>
                        <h2 className="text-center font-bold">One Way</h2>
                        <div className="my-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </div>
                        <Link to={'/services'} className="text-blue-400">
                            Read More
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:mt-0">
                    <IoCarSportSharp className="flex-shrink-0 w-full md:w-auto md:mr-6" size={'3rem'} />
                    <div>
                        <h2 className="text-center font-bold">Airports</h2>
                        <div className="my-3">
                            <h1>SIMPLE BY-THE-HOUR LUXURY JOURNEYS</h1>
                            <p>IMMERSE YOURSELF IN A PREMIER WORLD OF ELEGANCE</p>
                            <p>
                                Embark on a journey where your dedicated chauffeur is ready to cater to your every need,
                                from luggage assistance to insightful advice and beyond. Our transparent pricing ensures
                                you remain in command, free from hidden costs. A tailor-made experience for every
                                occasion, we are your mobile concierge, committed to making every moment extraordinary.
                            </p>
                        </div>
                        <Link to={'/services'} className="text-blue-400">
                            Read More
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:mt-0">
                    <IoCarSportSharp className="flex-shrink-0 w-full md:w-auto md:mr-6" size={'3rem'} />
                    <div>
                        <h2 className="text-center font-bold">By The Hour</h2>
                        <div className="my-3">
                            <h1>SIMPLE BY-THE-HOUR LUXURY JOURNEYS</h1>
                            <p>IMMERSE YOURSELF IN A PREMIER WORLD OF ELEGANCE</p>
                            <p>
                                Embark on a journey where your dedicated chauffeur is ready to cater to your every need,
                                from luggage assistance to insightful advice and beyond. Our transparent pricing ensures
                                you remain in command, free from hidden costs. A tailor-made experience for every
                                occasion, we are your mobile concierge, committed to making every moment extraordinary.
                            </p>
                        </div>
                        <Link to={'/services'} className="text-blue-400">
                            Read More
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:mt-0">
                    <IoCarSportSharp className="flex-shrink-0 w-full md:w-auto md:mr-6" size={'3rem'} />
                    <div>
                        <h2 className="text-center font-bold">Seaport Transfers</h2>
                        <div className="my-3">
                            <h1>SIMPLE BY-THE-HOUR LUXURY JOURNEYS</h1>
                            <p>IMMERSE YOURSELF IN A PREMIER WORLD OF ELEGANCE</p>
                            <p>
                                Embark on a journey where your dedicated chauffeur is ready to cater to your every need,
                                from luggage assistance to insightful advice and beyond. Our transparent pricing ensures
                                you remain in command, free from hidden costs. A tailor-made experience for every
                                occasion, we are your mobile concierge, committed to making every moment extraordinary.
                            </p>
                        </div>
                        <Link to={'/services'} className="text-blue-400">
                            Read More
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
