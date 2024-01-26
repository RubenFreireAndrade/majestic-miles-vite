import ContactForm from '../layouts/ContactForm';
import CustomerForm from '../layouts/CustomerForm';

import handOnCar from '../../assets/handOnCar2.jpg';

export default function OneWay({setFont}) {
    return (
        <>
            <section className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${handOnCar})`}}>
                <div className={`grid grid-cols-1 md:grid-cols-2 md:place-items-center pt-32 md:pt-40 ${setFont} tracking-wide`}>
                    <div className="flex flex-col mb-12 items-center text-center">
                        <div className="text-6xl text-white" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            ONE WAY JOURNEYS
                        </div>
                        <div className="text-lg text-white" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            SIMPLE TRANSPORT FROM ONE POINT TO ANOTHER
                        </div>
                    </div>
                    <div className="bg-white md:rounded-lg shadow-lg mb-12 md:w-[50%]">
                        <CustomerForm setLabelColor={'text-mm-black'} setFont={setFont} />
                    </div>
                </div>
            </section>

            <section className={`mx-[10%] md:mx-[15%] my-5 ${setFont} tracking-wide`}>
                <section>
                    <div className="text-3xl text-center font-semibold">STRAIGHTFORWARD RIDE PACKAGE</div>
                </section>

                <hr className="relative border-solid border-black my-6 md:mx-[20%]"></hr>

                <section>
                    {/* <div className="text-3xl text-center font-semibold">DONT KNOW YET</div> */}
                    <div className="my-2">
                        At Majestic Miles, we understand that a single journey can be just as significant as the
                        destination. Our One Way journeys are designed to offer you convenience, comfort, and a touch of
                        luxury.
                    </div>
                    <div className="my-2">
                        Our One Way service is tailored to your needs. Whether it's a ride to the airport, a business
                        meeting, or a special event, we ensure your journey is smooth and personalized.
                    </div>
                    <div className="my-2">
                        With Majestic Miles, what you see is what you pay. Our transparent pricing ensures that you know
                        the cost upfront, without any hidden fees. Take control of your budget and enjoy peace of mind.
                    </div>
                    {/* <div className="my-2">
                        A top-notch chauffeur service made for today's explorer. We pay attention to the little things
                        and offer transparent pricing with no surprises. Your chauffeur is committed to making your trip
                        exceptional and going beyond what you expect.
                    </div> */}
                </section>
            </section>

            <section className={`p-5 bg-mm-black ${setFont} tracking-wide`}>
                <div className="text-3xl text-center text-white font-semibold">LOOKING FOR SOMETHING SPECIFIC?</div>
                <div className="text-xl text-center text-white">
                    Submit an enquiry and we will be with you soon as possible
                </div>

                <hr className="relative border-solid border-white my-6 md:mx-[20%]"></hr>

                <div>
                    <ContactForm setFont={setFont}/>
                </div>
            </section>
        </>
    );
}
