import React, {useState} from 'react';
import {useFormData} from '../../utils/FormDataContext';

export default function YourDetails({onNext, onPrev}) {
    const {formData, updateField} = useFormData();
    const [errMessage, setErrMessage] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        updateField(name, value);
    };

    const handleCheckbox = () => {
        setChecked(!checked);
    };

    const validateForm = () => {
        let isFormValid = true;
        let errMsg = '';

        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                if (key === 'flightNumber' && !checked) continue;
                if (formData[key].trim() === '') {
                    isFormValid = false;
                    errMsg += `${key} is required.\n`;
                }
            }
        }

        setErrMessage(errMsg);
        return isFormValid;
    };

    const handleSubmit = () => {
        const isFormValid = validateForm();
        if (isFormValid) onNext();
        else alert('Please fill in all required fields:\n' + errMessage);
    };

    return (
        <div className="bg-white p-8 font-jost">
            <h1 className="text-xl mb-4">Pickup: {formData.pickup}</h1>
            <h1 className="text-xl mb-4">Destination: {formData.destination}</h1>

            <hr className="relative border-solid border-mm-black my-7"></hr>

            <h2 className="text-2xl font-semibold mb-6">Step 2: Your Details</h2>

            <div className="samFold:flex flex-row">
                <div className="w-full mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-600">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border p-2 w-full rounded-md focus:outline-none focus:border-mm-black"
                    />
                </div>

                <div className="w-full mb-4">
                    <label htmlFor="time" className="block text-sm font-medium text-gray-600">
                        Time
                    </label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="border p-2 w-full rounded-md focus:outline-none focus:border-mm-black"
                    />
                </div>
            </div>

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
                    className="border p-2 w-full rounded-md focus:outline-none focus:border-mm-black"
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
                    className="border p-2 w-full rounded-md focus:outline-none focus:border-mm-black"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-mm-black">
                    Phone Number
                </label>
                <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:border-mm-black"
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
                    className="border p-2 w-full rounded-md focus:outline-none focus:border-mm-black"
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
                    className="border p-2 w-full rounded-md focus:outline-none focus:border-mm-black"
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
                    className="border p-2 w-full rounded-md focus:outline-none focus:border-mm-black"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-mm-black">
                    Have a Flight Number?
                    <input
                        type="checkbox"
                        value={formData.flightNumber}
                        onChange={handleCheckbox}
                        className="m-2 w-5 h-5"
                    />
                </label>
            </div>

            {checked && (
                <div className="mb-4">
                    <input
                        type="text"
                        id="flightNumber"
                        name="flightNumber"
                        value={formData.flightNumber}
                        onChange={handleChange}
                        className="border p-2 w-full rounded-md focus:outline-none focus:border-mm-black"
                    />
                </div>
            )}

            <div className="mb-4">
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-mm-black">
                    Additional Information
                </label>
                <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:border-mm-black resize-none"></textarea>
            </div>

            <div className="flex justify-between items-center">
                <button
                    onClick={onPrev}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none focus:border-mm-black">
                    Previous
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-mm-black">
                    Submit
                </button>
            </div>
        </div>
    );
}
