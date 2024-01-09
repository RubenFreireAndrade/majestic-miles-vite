import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {AiOutlineMail} from 'react-icons/ai';
import {IoIosArrowDown} from 'react-icons/io';
import {BsFillTelephoneFill} from 'react-icons/bs';

import MenuButton from './MenuButton';
import mmLogo from '../../assets/mmLogo.svg';

export default function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    const toggleServicesDropdown = () => {
        setServicesDropdownOpen(!isServicesDropdownOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const maxBlurAmount = 5; // Adjust the maximum blur amount as needed
    const blurAmount = Math.min(scrollPosition / 20, maxBlurAmount); // Adjust the division value for a faster/slower fade

    return (
        <nav
            className="fixed top-0 left-0 w-full p-4 text-white"
            style={{
                backgroundColor: isMenuOpen ? 'rgba(30, 30, 30, 1)' : `rgba(30, 30, 30, ${scrollPosition / 200})`,
                //backdropFilter: `blur(${blurAmount}px)`,
                zIndex: 40,
            }}>
            <div className="container mx-auto flex items-center justify-between md:justify-evenly">
                <div className="ml-[10%]">
                    <Link to="/">
                        <img src={mmLogo} className="w-20 md:w-36" />
                    </Link>
                </div>

                <div className="hidden md:flex md:flex-col font-bold text-[1rem]">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-row">
                            <BsFillTelephoneFill className="md:ml-4" />
                            <span className="mx-2 hover:bg-green-300">90123908981</span>
                        </div>
                        <div className="flex flex-row">
                            <AiOutlineMail className="md:ml-4" />
                            <span>
                                <a href="mailto:info.majesticmiles@gmail.com" className="mx-2 hover:bg-green-300">
                                    info.majesticmiles@gmail.com
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-row justify-evenly font-bold text-[1.50rem]">
                        <>
                            <Link className="mx-1 hover:bg-green-300" onClick={toggleServicesDropdown}>
                                Services
                                {isServicesDropdownOpen && (
                                    <div className="absolute bg-mm-black p-1">
                                        <Link to={'/oneway'} className="block px-4 py-2 hover:bg-gray-200">
                                            One Way
                                        </Link>
                                        <Link to={'/airports'} className="block px-4 py-2 hover:bg-gray-200">
                                            Airports
                                        </Link>
                                        <Link to={'/bythehour'} className="block px-4 py-2 hover:bg-gray-200">
                                            By The Hour
                                        </Link>
                                        <Link to={'/seaport'} className="block px-4 py-2 hover:bg-gray-200">
                                            Seaport Transfers
                                        </Link>
                                    </div>
                                )}
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

                <MenuButton
                    toggleMenu={() => {
                        toggleMenu();
                        setServicesDropdownOpen(false);
                    }}
                    isMenuOpen={isMenuOpen}
                />

                {isMenuOpen && (
                    <div className="md:hidden fixed inset-0 bg-mm-black bg-opacity-90 h-3/4 mt-[18%] py-12 z-50">
                        <div className="flex flex-col text-white text-lg items-center h-full">
                            <div className="flex">
                                <BsFillTelephoneFill />
                                <span className="ml-4">90123908981</span>
                            </div>
                            <div className="flex">
                                <AiOutlineMail />
                                <span className="ml-4">info.majesticmiles@gmail.com</span>
                            </div>

                            <hr className="border-solid border-white px-[30%] my-5"></hr>

                            <div>
                                <div className="flex items-center">
                                    <Link
                                        className="block px-4 py-2 hover:bg-gray-200"
                                        onClick={toggleServicesDropdown}>
                                        Services
                                    </Link>
                                    <IoIosArrowDown
                                        className={`fixed right-36 ${isServicesDropdownOpen ? 'transform rotate-180' : ''}`}
                                    />
                                </div>
                                {isServicesDropdownOpen && (
                                    <div className="absolute  bg-mm-black">
                                        <Link
                                            to={'/oneway'}
                                            className="block px-4 py-2 hover:bg-gray-200"
                                            onClick={closeMenu}>
                                            One Way
                                        </Link>
                                        <Link
                                            to={'/airports'}
                                            className="block px-4 py-2 hover:bg-gray-200"
                                            onClick={closeMenu}>
                                            Airports
                                        </Link>
                                        <Link
                                            to={'/bythehour'}
                                            className="block px-4 py-2 hover:bg-gray-200"
                                            onClick={closeMenu}>
                                            By The Hour
                                        </Link>
                                        <Link
                                            to={'/seaport'}
                                            className="block px-4 py-2 hover:bg-gray-200"
                                            onClick={closeMenu}>
                                            Seaport Transfers
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link to="/about" className="pb-2" onClick={closeMenu}>
                                About
                            </Link>
                            <Link to="/contact" className="pb-2" onClick={closeMenu}>
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
