import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

export default function NavBar() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate transparency based on scroll position
    const transparency = Math.min(0.9, scrollPosition / 200); // Change 200 to adjust the speed

    // Create a transition effect on the background-color property
    const transitionStyle = {
        backgroundColor: `rgba(30, 30, 30, ${transparency})`,
        transition: 'background-color ease', // Adjust the duration and timing function as needed
    };

    return (
        <>
            <div
                className="fixed w-full pb-4 pt-2 flex flex-col md:flex-row md:justify-evenly items-center bg-mm-black text-white bg-opacity-90 z-50"
                style={transitionStyle}>
                <Link to={'/'} className="m-1 font-bold underline text-[2rem]">
                    Majestic Miles
                </Link>

                <div className="flex flex-col font-bold text-[1rem]">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-row">
                            <AiOutlineMail className="md:ml-4" />
                            <span>
                                <a href="mailto:info.majesticmiles@gmail.com" className="mx-2 hover:bg-green-300">
                                    info.majesticmiles@gmail.com
                                </a>
                            </span>
                        </div>
                        <div className="flex flex-row">
                            <BsFillTelephoneFill className="md:ml-4" />
                            <span className="mx-2 hover:bg-green-300">90123908981</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly font-bold text-[1.50rem]">
                        <>
                            <Link to={'/services'} className="mx-1 hover:bg-green-300">
                                Services
                            </Link>

                            <Link to={'/about'} className="mx-1 hover:bg-green-300">
                                About
                            </Link>

                            <Link to={'/contact'} className="mx-1 hover:bg-green-300">
                                Contact
                            </Link>
                        </>
                    </div>
                </div>
            </div>
        </>
    );
}
