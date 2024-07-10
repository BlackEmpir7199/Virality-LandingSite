import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { navItems } from '../constants';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMobileDrawerOpen(false);
        }
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80" >
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className='text-xl tracking-normal'>Virality</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <button onClick={() => handleScroll(item.href)}>{item.label}</button>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-900 px-3 py-2 rounded-md">Create an Account</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>

                        {mobileDrawerOpen && (
                            <div className="fixed mt-2 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                                <ul>
                                    {navItems.map((item, index) => (
                                        <li key={index} className='py-4'>
                                            <button onClick={() => handleScroll(item.href)}>{item.label}</button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="items-center my-3 flex space-x-4">
                                    <a href="SignIn" className="py-2 px-3 border rounded-md">Sign In</a>
                                    <a href="CreateAccount" className="bg-gradient-to-r from-orange-500 to-orange-900 px-3 py-2 rounded-md">Create an Account</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
