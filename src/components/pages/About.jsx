import ContactForm from '../layouts/ContactForm';
import {faqResponses} from '../layouts/Faq';

import sideFrontMerc from '../../assets/sideFrontMerc.jpg';

export default function About({setFont}) {
    return (
        <>
            <section className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${sideFrontMerc})`}}>
                <div className={`pt-32 md:pt-60`} style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}></div>
            </section>

            <section className={`mx-[10%] md:mx-[15%] my-5 ${setFont} tracking-wide`}>
                <section>
                    <div className="text-4xl text-center font-semibold">ABOUT MAJESTIC MILES</div>
                </section>

                <hr className="relative border-solid border-black my-6 md:mx-[20%]"></hr>

                <section className="mb-6">
                    <div className="my-2">
                        Welcome to Majestic Miles, where luxury meets reliability. We are a premier chauffeur service
                        dedicated to providing exceptional transportation solutions for our clients.
                    </div>
                    <div className="my-2">
                        Our mission is to exceed our clients' expectations by providing reliable, comfortable, and
                        personalized transportation solutions. We are committed to professionalism, integrity, and
                        exceptional service at every turn.
                    </div>
                    <div className="my-2">
                        Whether you need airport transfers, seaport transfers, hourly services, or corporate travel
                        solutions, Majestic Miles has you covered. Explore our range of services designed to meet your
                        unique transportation needs.
                    </div>
                </section>

                <section>
                    <div className="text-4xl text-center font-semibold">{`FREQUENTLY ASKED QUESTIONS (FAQs)`}</div>
                </section>

                <hr className="relative border-solid border-black my-6 md:mx-[20%]"></hr>

                {faqResponses.map((faq, index) => (
                    <section key={index}>
                        <div className="text-lg font-semibold my-2">{faq.question}</div>
                        <div>{faq.answer}</div>
                    </section>
                ))}
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
