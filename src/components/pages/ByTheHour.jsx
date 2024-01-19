import ContactForm from '../layouts/ContactForm';
import CustomerForm from '../layouts/CustomerForm';

import sideFrontMerc from '../../assets/sideFrontMerc.jpg';

export default function ByTheHour() {
    return (
        <>
            <section className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${sideFrontMerc})`}}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center pt-32 md:pt-40">
                    <div className="flex flex-col mb-12 items-center text-center">
                        <div className="text-6xl text-white" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            BY THE HOUR
                        </div>
                        <div className="text-lg text-white" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            AS DIRECTED HIRE
                        </div>
                    </div>
                    <div className="bg-white md:rounded-lg shadow-lg mb-12 p-4 md:p-0">
                        <CustomerForm setLabelColor={'text-mm-black'} />
                    </div>
                </div>
            </section>

            <section className="mx-[10%] md:mx-[15%] my-5">
                <section>
                    <div className="text-4xl text-center font-semibold">BY THE HOUR</div>
                </section>

                <hr className="relative border-solid border-black my-6 md:mx-[20%]"></hr>

                <section>
                    <div className="text-3xl text-center font-semibold">SIMPLE BY THE HOUR LUXURY JOURNEYS</div>
                    <div className="my-2">
                        Embark on a journey where your dedicated chauffeur is ready to cater to your every need, from
                        luggage assistance to insightful advice and beyond. Our transparent pricing ensures you remain
                        in command, free from hidden costs. A tailor-made experience for every occasion, we are your
                        mobile concierge, committed to making every moment extraordinary.
                    </div>
                </section>
            </section>

            <section className="p-5 bg-mm-black">
                <div className="text-3xl text-center text-white font-semibold">LOOKING FOR SOMETHING SPECIFIC?</div>
                <div className="text-xl text-center text-white">
                    Submit an enquiry and we will be with you soon as possible
                </div>

                <hr className="relative border-solid border-white my-6 md:mx-[20%]"></hr>

                <div>
                    <ContactForm />
                </div>
            </section>
        </>
    );
}
