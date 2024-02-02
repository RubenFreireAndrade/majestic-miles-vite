import {useEffect, useRef, useState} from 'react';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import Booking from '../pages/Booking';
import {useFormData} from '../../utils/FormDataContext';

export default function CustomerForm({setLabelColor, setFont}) {
    const {formData, updateField} = useFormData();

    const navigate = useNavigate();
    const [pickup, setPickup] = useState(null);
    const [destination, setDestination] = useState(null);
    const [autoApiKey, setAutoApiKey] = useState('');

    useEffect(() => {
        // Make a GET request when the component mounts
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch('/api/autocomplete');
        //         const result = await response.json();
        //         setAutoApiKey(result);
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // };

        // fetchData();

        // fetch('/api/autocomplete')
        // .then(res => res.json())
        // .then(data => {
        //     setAutoApiKey(data);
        //     console.log(autoApiKey);
        // }).catch(err => console.log({autoCompleteApi: err}));

        const getAutoComplete = async () => {
            const resp = await fetch('/api/autocomplete');
            const data = await resp.json();
            console.log(data);
            setAutoApiKey(data);
            console.log(autoApiKey);
        };

        getAutoComplete();
    }, []);

    const isFormValid = () => {
        return formData.pickup.trim() !== '' && formData.destination.trim() !== '';
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (pickup?.label !== undefined) formData.pickup = pickup.label;
        if (destination?.label !== undefined) formData.destination = destination.label;

        if (isFormValid()) {
            console.log('Form submitted:', formData);
            navigate('/booking');
        } else alert('Please fill in all the fields before submitting the form.');
    };

    return (
        <>
            <section className={`p-5 ${setFont} tracking-wide`}>
                <div className="text-center text-2xl font-jost">Where to?</div>
                <form onSubmit={handleSubmit} className="mx-auto flex flex-col md:flex-row pt-3">
                    <div className="w-full">
                        <div className="mb-4">
                            <label className={`block text-sm font-bold ${setLabelColor}`}>Pickup Location</label>
                            <GooglePlacesAutocomplete
                                debounce={1000}
                                selectProps={{
                                    name: 'pickup',
                                    placeholder: 'Enter Location...',
                                    pickup,
                                    onChange: setPickup,
                                    //required: true,
                                    value: pickup,
                                    styles: {
                                        control: provided => ({
                                            ...provided,
                                            borderColor: 'rgb(214 211 209)',
                                            marginTop: '0.25rem',
                                            padding: '0.1rem',
                                            borderRadius: '0.375rem',
                                            width: '100%',
                                        }),
                                        indicatorsContainer: provided => ({}),
                                    },
                                }}
                                apiKey={autoApiKey || import.meta.env.VITE_GOOGLE_MAPS_KEY}
                            />
                        </div>
                        <div className="mb-4">
                            <label className={`block text-sm font-bold ${setLabelColor}`}>Destination</label>
                            <GooglePlacesAutocomplete
                                debounce={1000}
                                selectProps={{
                                    name: 'destination',
                                    placeholder: 'Enter Location...',
                                    destination,
                                    onChange: setDestination,
                                    //required: true,
                                    value: destination,
                                    styles: {
                                        control: (provided, state) => ({
                                            ...provided,
                                            borderColor: 'rgb(214 211 209)',
                                            marginTop: '0.25rem',
                                            padding: '0.1rem',
                                            borderRadius: '0.375rem',
                                            width: '100%',
                                        }),
                                        indicatorsContainer: provided => ({}),
                                    },
                                }}
                                apiKey={autoApiKey || import.meta.env.VITE_GOOGLE_MAPS_KEY}
                            />
                        </div>
                        <div className="text-center mt-4">
                            <button
                                type="submit"
                                className="w-full bg-mm-black text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                                onClick={handleSubmit}>
                                Get Quote
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}
