import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { NavLink, useNavigate } from 'react-router';
import '../App.css';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = e => {
        e.preventDefault();
        LogOut().then(() => {
            toast('You have succesfully Logged Out');
            navigate('/');
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <div className="flex w-full items-center fixed top-0 z-100 bg-[#a8cc61]
                shadow-black shadow-inner dark:bg-[#7a9e33]
                py-6 md:px-6 px-2 lg:px-28 lobster text-black">

                {/* Left: Logo + Mobile Menu */}
                <div className="flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost gap-5 mt-3 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-blue-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black font-medium text-[15px]">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/allrooms'>All Rooms</NavLink>
                            <NavLink to='/mybookings'>My Booking</NavLink>
                            <NavLink to='/aboutus'>About Us</NavLink>
                            <NavLink to='/'>Find Us</NavLink>
                            {
                                !user && (
                                    <>
                                        <NavLink to='/login'><span className='font-medium'>LogIn</span></NavLink>
                                        <NavLink to='/register'><span className='font-medium'>Register</span></NavLink>
                                    </>
                                )
                            }
                            {
                                user && (
                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            className="btnUI btn-sm bg-amber-500 text-blue-900 font-bold w-full"
                                        >
                                            Log Out <span></span>
                                        </button>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-2xl font-frieska font-bold text-black tracking-widest ml-2">
                        A<span className='text-[33px] font-frieska text-[#fdf7c4]'>ur</span>is
                    </motion.h1>
                </div>

                {/* Center: Nav Links */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex text-[20px] space-x-6">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/allrooms'>All Rooms</NavLink>
                        <NavLink to='/mybookings'>My Booking</NavLink>
                        <NavLink to='/aboutus'>About Us</NavLink>
                        <NavLink to='/'>Find Us</NavLink>
                    </ul>
                </div>

                {/* Right: Auth Buttons / User Info */}
                <div className="flex items-center gap-2 ml-auto">
                    {
                        !user && (
                            <div className="hidden lg:flex space-x-2 overpass">
                                <button className='btnUI text-black'>
                                    <NavLink to='/login'>LogIn</NavLink>
                                </button>
                                <button className='btnUI text-black'>
                                    <NavLink to='/register'>Register</NavLink>
                                </button>
                            </div>
                        )
                    }

                    {/* User Photo always visible */}
                    {
                        user && (
                            <div className="avatar">
                                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        src={user.photoURL}
                                        alt="User"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        )
                    }

                    {/* Logout on desktop */}
                    {
                        user && (
                            <div className="hidden lg:flex">
                                <button
                                    onClick={handleSignOut}
                                    className="btnUI bg-amber-500 text-blue-900 font-extrabold"
                                >
                                    Log Out <span></span>
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
