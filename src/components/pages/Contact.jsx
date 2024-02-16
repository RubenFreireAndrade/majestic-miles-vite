import ContactForm from "../layouts/ContactForm";

import {GrMail} from 'react-icons/gr';
import {BsFillTelephoneFill} from 'react-icons/bs';

export default function Contact(setFont) {
    return (
        <>
            <div className={`bg-mm-black text-white font-${setFont} pt-48 pb-20`}>
                <section>
                    <div className="flex flex-row place-content-center">
                        <BsFillTelephoneFill className="md:ml-4" size="1.2rem"/>
                        <span className="mx-2" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                            07886 586682
                        </span>
                    </div>
                    <div className="flex flex-row place-content-center">
                        <GrMail className="md:ml-4" size="1.2rem"/>
                        <span>
                            <a
                                href="mailto:info.majesticmiles@gmail.com"
                                className="mx-2"
                                style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                                info.majesticmiles@gmail.com
                            </a>
                        </span>
                    </div>
                </section>
            </div>

            <section className={`p-5 bg-mm-black font-${setFont} tracking-wide`}>
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
