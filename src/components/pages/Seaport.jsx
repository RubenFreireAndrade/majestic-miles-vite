import mercLogo from '../../assets/mercLogo.jpg';

import CustomerForm from '../layouts/CustomerForm';

export default function SeaportTransfers() {
    return (
        <>
            <section className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${mercLogo})`}}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center pt-32 md:pt-40">
                    <div className="flex flex-col mb-12 items-center md:items-start">
                        <div className="text-6xl text-white text-center">SEAPORT TRANSFERS</div>
                        <div className="text-lg text-white text-center">
                            START OR FINISH YOUR JOURNEY WITH A COMFORTABLE RIDE
                        </div>
                    </div>
                    <div className="bg-white md:rounded-lg shadow-lg mb-12 p-4 md:p-0">
                        <CustomerForm setLabelColor={'text-black'} />
                    </div>
                </div>
            </section>
        </>
    );
}
