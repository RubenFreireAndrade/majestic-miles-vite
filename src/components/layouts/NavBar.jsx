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
                class="fixed w-full p-4 flex flex-row justify-evenly items-center bg-mm-black text-white bg-opacity-90 z-50"
                style={transitionStyle}>
                <Link to={'/'} class="m-1 font-bold underline text-[2rem]">
                    Majestic Miles
                </Link>

                <div class="flex flex-col font-bold text-[1rem]">
                    <div class="flex flex-row">
                        <AiOutlineMail class="ml-4" />
                        <span>
                            <a href="mailto:info.majesticmiles@gmail.com" class="mx-2 hover:bg-green-300">
                                info.majesticmiles@gmail.com
                            </a>
                        </span>
                        <BsFillTelephoneFill class="ml-4" />
                        <span class="mx-2 hover:bg-green-300">90123908981</span>
                    </div>
                    <div class="flex flex-row justify-evenly font-bold text-[1.50rem]">
                        <>
                            <Link to={'/services'} class="mx-1 hover:bg-green-300">
                                Services
                            </Link>

                            <Link to={'/about'} class="mx-1 hover:bg-green-300">
                                About
                            </Link>

                            <Link to={'/contact'} class="mx-1 hover:bg-green-300">
                                Contact
                            </Link>
                        </>
                    </div>
                </div>
            </div>
        </>
    );
}
