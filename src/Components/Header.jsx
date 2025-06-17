import React, {  useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { NavLink,  useNavigate } from 'react-router';
import '../App.css'
import { toast } from 'react-toastify';
const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()

    const handleSignOut =e=> {
        e.preventDefault();
       LogOut().then(() => {
            alert('jhjgcccc')
            toast('You have succesfully Logged Out')
            navigate('/')
        }
        ).catch(error => {
            console.log(error)
        })

    }
    return (
        <div>
            <div className="navbar bg-green-50 lobster py-6 lg:px-28 shadow-md px-7 shadow-green-950 sticky z-10 top-0 backdrop-opacity-10">

               


                <div className="navbar-start">
                    <div className='flex items-center'>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost p-0 mt-3 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="green"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content lobster bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <NavLink to='/'>Home</NavLink>

                                <NavLink to='/allrooms'>All Rooms</NavLink>
                                <NavLink to='/mybookings'>My Booking</NavLink>
                                {
                                    !user && (<>
                                        <NavLink to='/login'>    <span className='font-medium '> LogIn</span></NavLink>
                                        <NavLink to='/register'> <span className='font-medium '> Register</span></NavLink>
                                    </>)

                                }
                            </ul>
                        </div>



                        <img className='h-32' src="https://i.ibb.co/RThBCYPG/freepik-add-a-small-elegant-flower-on-one-of-the-letters-i-93690.png" alt="" />
                    </div>



                </div>
                <div className="navbar-end hidden lg:flex gap-7 text-green-900 ">
                    <ul className=" lobster  lg:flex text-[20px]  lg:space-x-4 ">
                        <NavLink to='/'>Home</NavLink>

                                <NavLink to='/allrooms'>All Rooms</NavLink>
                                <NavLink to='/mybookings'>My Booking</NavLink>
                                {
                                    !user && (<>
                                        <NavLink to='/login'>    <span className='font-medium '> LogIn</span></NavLink>
                                        <NavLink to='/register'> <span className='font-medium '> Register</span></NavLink>
                                    </>)

                                }





                    </ul>

                </div>
                <div className=" navbar-end">

                    <div className='space-x-2 hidden lg:block overpass'>
                        {
                            !user && (<>
                                <button className='btn rounded-none font-bold bg-green-700 text-white'><NavLink to='/login'>    <span className='font-medium '> LogIn</span></NavLink></button>
                                <button className='btn rounded-none font-bold bg-green-700 text-white'><NavLink to='/register'> <span className='font-medium '> Register</span></NavLink></button>


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
                                <button onClick={handleSignOut} className="btn text-white overpass font-bold bg-green-700"
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