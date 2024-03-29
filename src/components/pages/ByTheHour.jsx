import ContactForm from '../layouts/ContactForm';
import CustomerForm from '../layouts/CustomerForm';

import handOnCar2 from '../../assets/handOnCar2.jpg';

export default function ByTheHour({setFont}) {
    return (
        <>
            <section className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${handOnCar2})`}}>
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 md:place-items-center pt-32 md:pt-40 ${setFont} tracking-wide`}>
                    <div className="flex flex-col mb-12 items-center text-center">
                        <div className="text-6xl text-white" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            BY THE HOUR
                        </div>
                        <div className="text-lg text-white" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            AS DIRECTED HIRE
                        </div>
                    </div>
                    <div className="bg-white md:rounded-lg shadow-lg mb-12 md:w-[50%]">
                        <CustomerForm setLabelColor={'text-mm-black'} setFont={setFont} />
                    </div>
                </div>
            </section>

            <section className={`mx-[10%] md:mx-[15%] my-5 ${setFont} tracking-wide`}>
                <section>
                    <div className="text-4xl text-center font-semibold">DISCOVER THE CITY YOUR WAY</div>
                </section>

                <hr className="relative border-solid border-black my-6 md:mx-[20%]"></hr>

                <section>
                    {/* <div className="text-3xl text-center font-semibold">DISCOVER THE CITY YOUR WAY WITH: BY THE HOUR</div> */}
                    <div className="my-2">
                        Embark on a journey where your dedicated chauffeur is ready to cater to your every need, from
                        luggage assistance to insightful advice and beyond. Our transparent pricing ensures you remain
                        in command, free from hidden costs. A tailor-made experience for every occasion, we are your
                        mobile concierge, committed to making every moment extraordinary.
                    </div>
                    <div className="my-2">
                        Unleash the freedom to explore at your own pace with "By The Hour" chauffeur service. Tailored
                        for those who value flexibility and personalized experiences, our service is designed to put you
                        in control of your journey.
                    </div>
                </section>
            </section>

            <section className={`p-5 bg-mm-black ${setFont} tracking-wide`}>
                <div className="text-3xl text-center text-white font-semibold">LOOKING FOR SOMETHING SPECIFIC?</div>
                <div className="text-xl text-center text-white">
                    Submit an enquiry and we will be with you soon as possible
                </div>

                <hr className="relative border-solid border-white my-6 md:mx-[20%]"></hr>

                <div>
                    <ContactForm setFont={setFont} />
                </div>
            </section>
        </>
    );
}
