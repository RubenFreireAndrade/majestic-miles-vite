import {useState} from 'react';
import axios from 'axios';
//import some from '../../../functions/api/sendmail'

export default function CustomerForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pickup: '',
        pickup_time: '',
        destination: '',
        destination_time: '',
        additional_info: '',
    });

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const fetching = await fetch('../../../functions/api/sendmail');
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

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Pickup Location:</label>
                            <input
                                type="text"
                                name="pickup"
                                onChange={handleChange}
                                className="mt-1 p-2 border border-black rounded-md w-full"
                            />
                        </div>
                    </div>

                    <div className="w-full pl-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Pickup Time:</label>
                            <input
                                type="text"
                                name="pickup_time"
                                onChange={handleChange}
                                className="mt-1 p-2 border border-black rounded-md w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Destination:</label>
                            <input
                                type="text"
                                name="destination"
                                onChange={handleChange}
                                className="mt-1 p-2 border border-black rounded-md w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Destination Time:</label>
                            <input
                                type="text"
                                name="destination_time"
                                onChange={handleChange}
                                className="mt-1 p-2 border border-black rounded-md w-full"
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
                        className="bg-blue-400 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </section>
        </>
    );
}
