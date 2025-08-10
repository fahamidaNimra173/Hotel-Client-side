import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { NavLink, useNavigate } from 'react-router';
import '../App.css'
import { toast } from 'react-toastify';
import { motion } from "framer-motion";
const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()

    const handleSignOut = e => {
        e.preventDefault();
        LogOut().then(() => {
           
            toast('You have succesfully Logged Out')
            navigate('/')
        }
        ).catch(error => {
            console.log(error)
        })

    }
    return (
        <div>
            <div className=" flex  w-full items-center lg:justify-center fixed top-0 z-100 bg-[#a8cc61]
                 shadow-black shadow-inner dark:bg-[#7a9e33]
                py-6 md:px-6 px-2 lg:px-28 lobster text-black ">





                <div className="">
                    <div className='flex items-center '>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost gap-5 mt-3  lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content  bg-blue-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black font-medium text-[15px]">
                                <NavLink to='/'>Home</NavLink>

                                <NavLink to='/allrooms'>All Rooms</NavLink>
                                <NavLink to='/mybookings'>My Booking</NavLink>
                                <NavLink to='/aboutus'>About Us</NavLink>
                                <NavLink to='/'>Find Us</NavLink>
                                {
                                    !user && (<>
                                        <NavLink to='/login'>    <span className='font-medium '> LogIn</span></NavLink>
                                        <NavLink to='/register'> <span className='font-medium '> Register</span></NavLink>
                                    </>)

                                }
                            </ul>
                        </div>



                        <motion.h1
                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className=" text-2xl font-frieska font-bold text-black tracking-widest">
                            A<span className='text-[33px] font-frieska  text-white'>ur</span>is
                        </motion.h1>
                    </div>



                </div>
                <div className=" hidden  lg:flex lg:flex-1 justify-around  gap-7 text-black ">
                    <ul className="  lg:flex  text-[20px]  lg:space-x-4 ">
                        <NavLink to='/'>Home</NavLink>

                        <NavLink to='/allrooms'>All Rooms</NavLink>
                        <NavLink to='/mybookings'>My Booking</NavLink>
                         <NavLink to='/aboutus'>About Us</NavLink>
                                <NavLink to='/'>Find Us</NavLink>
                        {/* {
                            !user && (<>
                                <NavLink to='/login'>    <span className='font-medium '> LogIn</span></NavLink>
                                <NavLink to='/register'> <span className='font-medium '> Register</span></NavLink>
                            </>)

                        } */}





                    </ul>

                </div>
                <div className=" ">

                    <div className='space-x-2 hidden lg:flex  overpass'>
                        {
                            !user && (<>
                                <button className='btnUI text-black '><NavLink to='/login'>  LogIn  <span > </span></NavLink></button>
                                <button className='btnUI text-black '><NavLink to='/register'> Register <span> </span></NavLink></button>


                            </>)

                        }
                    </div>


                    {
                        user && (
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 p-2">
                                <div className="avatar">
                                    <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img
                                            data-tooltip-id='my-tooltip-2'
                                            data-tooltip-content={user.displayName}
                                            src={user.photoURL}
                                            alt="User Photo"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                                <button onClick={handleSignOut} className="btn text-blue-900   font-extrabold bg-amber-500"
                                >Log Out</button>
                            </div>
                        )
                    }


                    <div className=' absolute top-7 '>

                    </div>
                </div>
                {/* <Tooltip
                    id="my-tooltip-2"
                    place="bottom"
                    variant="info"
                /> */}
            </div>
        </div>
    );
};

export default Navbar;