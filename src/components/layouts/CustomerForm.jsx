import {useEffect, useRef, useState} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export default function CustomerForm() {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [autoApiKey, setAutoApiKey] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pickup: '',
        destination: '',
        additional_info: '',
    });

    useEffect(() => {
        // Make a GET request when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch('api/autocomplete');
                const result = await response.json();
                setAutoApiKey(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
        formData.pickup = pickup.label;
        formData.destination = destination.label;
        console.log(formData);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            // Send data to the Cloudflare worker endpoint
            await fetch('/api/sendmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Optionally, you can handle success or redirect the user
            console.log('Booking data sent to Cloudflare worker successfully');
        } catch (error) {
            console.error('Error sending booking data to Cloudflare worker:', error);
        }
    };

    return (
        <>
            <section className="text-center p-8">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex justify-between">
                    <div className="w-full pr-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Name:</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                className="mt-1 p-2 border border-black rounded-md w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Phone:</label>
                            <input
                                type="tel"
                                name="phone"
                                onChange={handleChange}
                                className="mt-1 p-2 border border-black rounded-md w-full"
                            />
                        </div>
                    </div>

                    <div className="w-full pl-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Pickup Location:</label>
                            <GooglePlacesAutocomplete
                                selectProps={{
                                    name: 'pickup',
                                    //formData,
                                    //onChange: value => handleChange(value, 'pickup'),
                                    //onInputChange: value => handleChange(value),
                                    pickup,
                                    onChange: setPickup,
                                    styles: {
                                        control: provided => ({
                                            ...provided,
                                            borderColor: 'hsl(0, 0%, 0%)',
                                            margin: '0.25rem',
                                            padding: '0.1rem',
                                            borderRadius: '0.375rem',
                                            width: '100%',
                                        }),
                                    },
                                }}
                                apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Destination:</label>
                            <GooglePlacesAutocomplete
                                selectProps={{
                                    name: 'destination',
                                    //onChange: value => handleChange(value),
                                    //onInputChange: value => handleChange(value),
                                    destination,
                                    onChange: setDestination,
                                    styles: {
                                        control: provided => ({
                                            ...provided,
                                            borderColor: 'hsl(0, 0%, 0%)',
                                            margin: '0.25rem',
                                            padding: '0.1rem',
                                            borderRadius: '0.375rem',
                                            width: '100%',
                                        }),
                                    },
                                }}
                                apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
                            />
                        </div>
                    </div>
                </form>

                <div className="text-center w-1/2 mx-auto mt-4">
                    <label className="block text-sm font-medium text-gray-700">Additional Information:</label>
                    <textarea
                        name="additional_info"
                        onChange={handleChange}
                        className="mt-1 p-2 border border-black rounded-md w-full"></textarea>
                </div>

                <div className="text-center mt-4">
                    <button
                        type="submit"
                        className="bg-mm-black text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </section>
        </>
    );
}
