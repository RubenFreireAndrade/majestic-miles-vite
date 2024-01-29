// BookingForm.js
import React, {useState, useEffect} from 'react';
import Payment from '../pages/Payment';
import YourDetails from '../pages/YourDetails';
import CarSelection from '../pages/CarSelection';

const Booking = () => {
    useEffect(() => {
        // Change background color after navigation
        document.body.style.backgroundColor = '#cfd1d4';

        // Cleanup the background color when the component is unmounted
        return () => {
            document.body.style.backgroundColor = ''; // Reset to default
        };
    }, []);

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    return (
        <>
            <div className="md:mx-[20%] my-20 md:my-40 border rounded shadow-lg">
                {step === 1 && <CarSelection onNext={handleNext} />}
                {step === 2 && <YourDetails onNext={handleNext} onPrev={handlePrev} />}
                {step === 3 && <Payment onSubmit={handleNext} />}

                {/* {step > 1 && <button onClick={handlePrev}>Previous</button>} */}
            </div>
        </>
    );
};

export default Booking;
