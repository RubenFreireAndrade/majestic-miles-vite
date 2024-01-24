import {useEffect, useRef, useState} from 'react';

export default function BookingForm({setBookingData}) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        pickup: '',
        destination: '',
        additional_info: '',
    });

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log(formData);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            // Send data to the Cloudflare worker endpoint
            await fetch('/api/sendjob', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Optionally, you can handle success or redirect the user
            console.log(formData);
            console.log('Booking data sent to Cloudflare worker successfully');
        } catch (error) {
            console.error('Error sending booking data to Cloudflare worker:', error);
        }
    };

    return (
        <>
            <section className="m-2 md:m-1 md:py-5 md:px-5">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col md:flex-row justify-between">
                    <div className="w-full md:pr-4">
                        <div className="mb-4">
                            <label className={`block text-sm font-bold ${setLabelColor}`}>Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                className="mt-1 p-2 border rounded-md w-full border-stone-300 focus:outline-none focus:border-black"
                            />
                        </div>

                        <div className="mb-4">
                            <label className={`block text-sm font-bold ${setLabelColor}`}>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                onChange={handleChange}
                                className="mt-1 p-2 border rounded-md w-full border-stone-300 focus:outline-none focus:border-black"
                            />
                        </div>
                    </div>
                </form>

                {/* THIS MIGHT NOT BE NEEDED */}
                <div>
                    <label className={`block text-sm font-bold ${setLabelColor}`}>Additional Information</label>
                    <textarea
                        name="additional_info"
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded-md w-full border-stone-300 resize-none focus:outline-none focus:border-black"></textarea>
                </div>

                <div className="text-center mt-4">
                    <button
                        type="submit"
                        className="w-full bg-mm-black text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </section>
        </>
    );
}
