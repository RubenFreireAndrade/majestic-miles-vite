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

            <section class="grid grid-cols-2 gap-10 mx-12 items-center">
                <section class="text-center">
                    <div class="text-[2rem]">YOUR PERSONAL CHAUFFEUR SERVICE</div>
                    THIS IS THE SECTION FOR WHAT MM IS SELLING. DO THIS BY DEMONSTRATING WHAT COMES WITH WHEN ORDERING
                    MAJESTIC MILES.
                </section>

                <CustomerForm />
            </section>

            <section class="text-center font-bold text-[2rem] border border-black p-4 bg-mm-black text-white">
                Our Services
            </section>

            <section class="grid grid-cols-2 gap-10 mx-12 mb-12 items-center">
                <div class="flex flex-row">
                    <IoCarSportSharp class="flex-shrink-0 mr-6" size={'3rem'} />
                    <div>
                        <h2 class="text-center font-bold">Transfers</h2>
                        <div class="my-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </div>
                        <h2 class="text-blue-400">Read More</h2>
                    </div>
                </div>

                <div class="flex flex-row">
                    <IoCarSportSharp class="flex-shrink-0 mr-6" size={'3rem'} />
                    <div>
                        <h2 class="text-center font-bold">Hire</h2>
                        <div class="my-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </div>
                        <h2 class="text-blue-400">Read More</h2>
                    </div>
                </div>
            </section>
        </>
    );
}
