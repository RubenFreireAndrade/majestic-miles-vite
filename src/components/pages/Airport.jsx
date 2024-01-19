import ContactForm from '../layouts/ContactForm';
import CustomerForm from '../layouts/CustomerForm';

import heathrowTerm3 from '../../assets/heathrowTerm3.jpg';

export default function Airport() {
    return (
        <>
            <section className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${heathrowTerm3})`}}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center pt-32 md:pt-40">
                    <div className="flex flex-col mb-12 items-center text-center">
                        <div className="text-6xl text-white" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            AIRPORT TRANSFERS
                        </div>
                        <div className="text-lg text-white" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            YOUR CHAUFFEUR MEETS & GREETS YOU
                        </div>
                    </div>
                    <div className="bg-white md:rounded-lg shadow-lg mb-12 p-4 md:p-0">
                        <CustomerForm setLabelColor={'text-mm-black'} />
                    </div>
                </div>
            </section>

            <section className="mx-[10%] md:mx-[15%] my-5">
                <section>
                    <div className="text-4xl text-center font-semibold">AIRPORT</div>
                </section>

                <hr className="relative border-solid border-black my-6 md:mx-[20%]"></hr>

                <section>
                    <div className="text-3xl text-center font-semibold">EXCEPTIONAL, SAFE MEET AND GREET</div>
                    <div className="my-2">
                        Your chauffeur will be waiting in the arrivals hall with your name board. They will then help
                        with your bags before walking you to your vehicle. Your personal chauffeur will be on hand as
                        butler, concierge, porter and personal assistant on wheels.
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
