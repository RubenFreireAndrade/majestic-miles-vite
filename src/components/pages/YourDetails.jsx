import React, {useState} from 'react';
import {useFormData} from '../../utils/FormDataContext';

const YourDetails = ({onNext, onPrev}) => {
    const {formData, updateField} = useFormData();

    const handleChange = e => {
        const {name, value} = e.target;
        updateField(name, value);
    };

    return (
        <div className="bg-white p-8 font-jost">
            <h1 className="text-xl mb-4">Pickup: {formData.pickup}</h1>
            <h1 className="text-xl mb-4">Destination: {formData.destination}</h1>

            <hr className="relative border-solid border-mm-black my-7"></hr>

            <h2 className="text-2xl font-semibold mb-6">Step 2: Your Details</h2>

            <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-mm-black">
                    First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-mm-black">
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-mm-black">
                    Phone Number
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-mm-black">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="numPassengers" className="block text-sm font-medium text-mm-black">
                    Number of Passengers
                </label>
                <input
                    type="number"
                    id="numPassengers"
                    name="numPassengers"
                    value={formData.numPassengers}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="numLuggage" className="block text-sm font-medium text-mm-black">
                    Number of Luggage
                </label>
                <input
                    type="number"
                    id="numLuggage"
                    name="numLuggage"
                    value={formData.numLuggage}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-mm-black">
                    Additional Information
                </label>
                <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"></textarea>
            </div>

            <div className="flex justify-between items-center">
                <button
                    onClick={onPrev}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:border-blue-300">
                    Previous
                </button>
                <button
                    onClick={onNext}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                    Next
                </button>
            </div>
        </div>
    );
};

export default YourDetails;