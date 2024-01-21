import React, {useState} from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            // Send data to the Cloudflare worker endpoint
            await fetch('/api/sendquery', {
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
        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-mm-black text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md border-stone-300 focus:outline-none focus:border-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-mm-black text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md border-stone-300 focus:outline-none focus:border-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-mm-black text-sm font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md border-stone-300 focus:outline-none focus:border-black resize-none"
                        required></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-mm-black text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none">
                    Submit
                </button>
            </form>
        </div>
    );
}
