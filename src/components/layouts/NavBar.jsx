import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {AiOutlineMail} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {IoIosArrowDown} from 'react-icons/io';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';
import {SocialIcon} from 'react-social-icons';

import MenuButton from './MenuButton';
import mmLogo4 from '../../assets/mmLogo4.svg';

export default function NavBar({setFont}) {
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
            className={`fixed top-0 left-0 w-full px-4 py-2 text-white ${setFont} tracking-wider`}
            style={{
                backgroundColor: isMenuOpen ? 'rgba(30, 30, 30, 1)' : `rgba(30, 30, 30, ${scrollPosition / 200})`,
                //backdropFilter: `blur(${blurAmount}px)`,
                zIndex: 40,
            }}>
            <div className="container mx-auto flex items-center justify-between md:justify-evenly">
                <div>
                    <Link to="/">
                        <img
                            src={mmLogo4}
                            className="w-24 md:w-52"
                            style={{'stroke-width': '0.02rem', stroke: 'rgb(30, 30, 30)'}}
                        />
                    </Link>
                </div>

                <div className="hidden md:flex md:flex-col font-bold text-[1rem]">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-row">
                            <IoLogoWhatsapp
                                size="1.7rem"
                                className="md:ml-4"
                                style={{'stroke-width': '0.3rem', stroke: 'rgb(30, 30, 30)'}}
                            />
                            <span className="mx-2" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                                07886 586682
                            </span>
                        </div>
                        <div className="flex flex-row">
                            <GrMail
                                className="md:ml-4"
                                style={{'stroke-width': '0.02rem', stroke: 'rgb(30, 30, 30)'}}
                                size="1.5rem"
                            />
                            <span>
                                <a
                                    href="mailto:info.majesticmiles@gmail.com"
                                    className="mx-2"
                                    style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                                    info.majesticmiles@gmail.com
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-row justify-evenly text-[1.50rem]">
                        <>
                            <Link
                                className="mt-2"
                                style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}
                                onClick={toggleServicesDropdown}>
                                Services
                                {isServicesDropdownOpen && (
                                    <div className="absolute bg-mm-black p-1">
                                        <Link
                                            to={'/oneway'}
                                            className="block px-4 py-2 hover:bg-gray-200"
                                            style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                                            One Way
                                        </Link>
                                        <Link
                                            to={'/bythehour'}
                                            className="block px-4 py-2 hover:bg-gray-200"
                                            style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                                            By The Hour
                                        </Link>
                                        <Link
                                            to={'/seaports'}
                                            className="block px-4 py-2 hover:bg-gray-200"
                                            style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                                            Seaport Transfers
                                        </Link>
                                    </div>
                                )}
                            </Link>

                            <Link to={'/about'} className="mt-2" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
                                About
                            </Link>

                            <Link to={'/contact'} className="mt-2" style={{'text-shadow': 'rgb(30, 30, 30) 1px 1px'}}>
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
                                <IoLogoWhatsapp
                                    size="1.4rem"
                                    className="md:ml-4"
                                    style={{'stroke-width': '0.3rem', stroke: 'rgb(30, 30, 30)'}}
                                />
                                <span className="ml-4">07886 586682</span>
                            </div>
                            <div className="flex">
                                <AiOutlineMail />
                                <span className="ml-4">
                                    <a href="mailto:info.majesticmiles@gmail.com">info.majesticmiles@gmail.com</a>
                                </span>
                            </div>

                            <hr className="relative border-solid border-white w-1/2 my-6"></hr>

                            <div>
                                <div className="flex">
                                    <Link className="flex pb-2" onClick={toggleServicesDropdown}>
                                        <span>Services</span>
                                        {/* <IoIosArrowDown
                                            className={`${isServicesDropdownOpen ? 'transform rotate-180' : ''}`}
                                        /> */}
                                    </Link>
                                </div>
                                {isServicesDropdownOpen && (
                                    <div className="absolute bg-mm-black">
                                        <Link to={'/oneway'} className="block px-4 py-2" onClick={closeMenu}>
                                            One Way
                                        </Link>
                                        <Link to={'/bythehour'} className="block px-4 py-2" onClick={closeMenu}>
                                            By The Hour
                                        </Link>
                                        <Link to={'/seaports'} className="block px-4 py-2" onClick={closeMenu}>
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
