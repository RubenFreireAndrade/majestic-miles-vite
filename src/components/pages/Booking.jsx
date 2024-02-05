// BookingForm.js
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import Payment from '../pages/Payment';
import YourDetails from '../pages/YourDetails';
import CarSelection from '../pages/CarSelection';

import {useFormData} from '../../utils/FormDataContext';

const Booking = () => {
    const {formData, updateField} = useFormData();
    const navigate = useNavigate();

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

    const sendJob = async () => {
        // Send data to the Cloudflare worker endpoint
        const job = await fetch('/api/sendjob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!job.ok) return navigate('/failed');
        return navigate('/success');
    };

    return (
        <>
            <div className="md:mx-[20%] my-20 md:my-48 border rounded shadow-lg">
                {/* {step === 1 && <CarSelection onNext={handleNext} />} */}
                {step === 0 && navigate('/')}
                {step === 1 && <YourDetails onNext={sendJob} onPrev={handlePrev} />}

                {/* Implement this when you have the Payment component ready */}
                {/* {step === 3 && <Payment onSubmit={sendJob} isJobSent={isJobSent} />} */}
            </div>
        </>
    );
};

export default Booking;
