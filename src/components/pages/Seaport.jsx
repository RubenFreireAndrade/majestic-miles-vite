import ContactForm from '../layouts/ContactForm';
import CustomerForm from '../layouts/CustomerForm';

import seaport from '../../assets/seaport.jpg';

export default function SeaportTransfers() {
    return (
        <>
            <section className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${seaport})`}}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center pt-32 md:pt-40">
                    <div className="flex flex-col mb-12 items-center text-center">
                        <div className="text-6xl text-white" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            SEAPORT TRANSFERS
                        </div>
                        <div className="text-lg text-white" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            START OR FINISH YOUR JOURNEY WITH A COMFORTABLE RIDE
                        </div>
                    </div>
                    <div className="bg-white md:rounded-lg shadow-lg mb-12 p-4 md:p-0">
                        <CustomerForm setLabelColor={'text-mm-black'} />
                    </div>
                </div>
            </section>

            <section className="mx-[10%] md:mx-[15%] my-5">
                <section>
                    <div className="text-4xl text-center font-semibold">EMBARK IN STYLE, DISEMBARK WITH GRACE</div>
                </section>

                <hr className="relative border-solid border-black my-6 md:mx-[20%]"></hr>

                <section>
                    {/* <div className="text-3xl text-center font-semibold">EXCEPTIONAL, SAFE MEET AND GREET</div> */}
                    <div className="my-2">
                        Prepare to set sail with tranquility and style. Our dedicated Seaport Transfer service is
                        crafted to ensure your transition to or from the port is as effortless as a gentle sea breeze.
                    </div>
                    {/* <div className="my-2">
                        Embark on your cruise adventure or conclude it with ease. Our chauffeurs are committed to
                        punctuality, ensuring you board your ship on time or are promptly greeted upon disembarking.
                    </div> */}
                    <div>
                        For arrivals, our chauffeurs extend a harbor welcome, meeting you inside the terminal. Allow us
                        to guide you from the port to your awaiting vehicle, ensuring a seamless transition to your next
                        destination. Look for our sign, and let the voyage begin on a high note.
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
