import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate, } from 'react-router';
import { AuthContext } from '../AuthContext';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import { IoBed } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FcMoneyTransfer, FcRating } from "react-icons/fc";
const RoomDetails = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const Location = useLocation()
    const { roomId, name, bannerImage, description, price, view, occupancy, roomSize, roomBeds, image, bedType, rating, availability } = useLoaderData()
    const [reviews, setReviews] = useState([]);
    const [available, setAvailable] = useState(availability)
    // const [booking,setBooking]=useState(false)

    useEffect(() => {
        axios.get('http://localhost:5000/reviews').then(res => {
            console.log(res.data.roomId)
            const review = res.data.filter(review => review.roomId == roomId)
            setReviews(review)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleBooking = e => {
        e.preventDefault();
        if (user) {

            document.getElementById('my_modal_4').showModal()
            //  setBooking(true)

            // hhh

        }
        else { navigate('/login', { state: { from: Location.pathname } }) }


    }

    const handleConfirm = e => {
        e.preventDefault();
        const date = e.target.date.value
        console.log(date)
        const bookings = {
            userEmail: user.email,
            roomId,
            name,
            description,
            date,
            price,

            image,
            bedType,
            rating

        }
        console.log(bookings)
        axios.post('http://localhost:5000/bookings', bookings).then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                    title: "You have successfully Booked this Room!",
                    icon: "success",
                    draggable: true

                });
            }
        }).catch(error => {
            console.log(error)
        })

        axios.put(`http://localhost:5000/hotels/${roomId}`, {
            availability: false
        }).then(res => {
            console.log(res.data)

        }).catch(error => {
            console.log(error)
        })
        setAvailable(false)
    }

    return (
        <div >

            <div className='my-9 sm:mx-6 mx-2  text-black p-4 '>
                <div><img className='rounded-2xl mb-20 shadow-lg shadow-black' src={bannerImage} alt="" /></div>

                <motion.h1

                    initial={{ opacity: 0, x: 100, scale: 0 }}
                    whileInView={{ opacity: 1, x: [0, -10], scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className='md:text-5xl text-3xl md:mx-10 my-9 font-bold fascinate-inline-regular text-amber-700'>{name}</motion.h1>

                <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                    <motion.div
                        whileInView={{ opacity: 1, x: [-100, 0], }}
                        transition={{ duration: 1.2 }}
                        className='flex-1'>
                        <img className='rounded-2xl' src={image} alt="" />
                    </motion.div>
                    <div className='flex-1'>

                        <p className='text-[20px] font-semibold exo-2 text-amber-900'>{description}</p>
                        <div className='flex fbg-[#C19A6B]lex-col md:flex-row gap-5 flex-wrap justify-between mx-auto items-center'>
                            <div className='bg-[#C19A6B] text-white px-5 py-9 rounded-4xl text-center my-12'>
                                <h4 className='flex items-center gap-2 text-[20px] font-semibold'> <FcMoneyTransfer /> PRICE: {price}</h4>
                            </div>
                            <div className=' flex  bg-[#C19A6B] text-white px-5 py-9 rounded-4xl text-center'>
                                <h4 className='flex items-center gap-2 text-[20px] font-semibold'><FcRating /> RATINGS: {rating}</h4>
                            </div>
                            <div className='bg-[#C19A6B] text-white px-5 py-9 rounded-4xl text-center'>
                                <h4 className='flex items-center gap-2 text-[20px] font-semibold'><IoBed /> BED: {bedType}</h4>
                            </div>
                        </div>
                    </div>










                </div>






                <div className="my-12 w-full max-w-md md:max-w-2xl lg:max-w-5xl bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 mx-auto">
                    <h2 className="text-2xl font-semibold text-amber-700 mb-4 text-center">Room Overview</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <div>
                                <p className="text-gray-700 font-medium">Room Size</p>
                                <p className="text-sm text-gray-500">{roomSize}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <div>
                                <p className="text-gray-700 font-medium">Room Beds</p>
                                <p className="text-sm text-gray-500">{roomBeds}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <div>
                                <p className="text-gray-700 font-medium">Occupancy</p>
                                <p className="text-sm text-gray-500">{occupancy}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <div>
                                <p className="text-gray-700 font-medium">View</p>
                                <p className="text-sm text-gray-500">{view}</p>
                            </div>
                        </div>
                    </div>
                </div>






                <div className=' text-center space-y-2 mt-12'>

                    <div className='bg-blue-100 text-black px-7 py-16 border-2'>
                        {reviews.length > 0 ? (
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={20}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                pagination={{ clickable: true }}
                                loop={true}
                                className="my-10"
                            >
                                {reviews.map((reviewDetails, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col items-center text-center">
                                            <div className="avatar mb-4">
                                                <div className="mask mask-hexagon-2 w-24">
                                                    <img src={reviewDetails.userImage} alt="User" />
                                                </div>
                                            </div>
                                            <h1 className="text-lg font-semibold">{reviewDetails.username}</h1>
                                            <p className="text-yellow-600 font-bold mt-1">Rating: {reviewDetails.ratings}</p>
                                            <p className="text-sm text-gray-600 mt-2 mb-3">{reviewDetails.comment}</p>
                                            <h5 className="text-xs text-gray-400">{reviewDetails.timestamp}</h5>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <div>
                                <h1>There are no reviews for this room</h1>
                            </div>
                        )}
                    </div>

                    <div className="card-actions justify-center my-7">

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-primary" onClick={handleBooking}>Book Now</button>

                        {available === true ?
                            <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box bg-white">
                                    <div className=' text-end'>
                                        <button onClick={() => document.getElementById('my_modal_4').close()} className="btn justify-end ">X</button>
                                    </div>

                                    <h3 className="font-bold text-lg">{name}</h3>
                                    {available === true ? <h1>Available</h1> : <h1>Not Available</h1>
                                    }
                                    <p className="py-4">Suitable For {occupancy} </p>
                                    <div className='flex mx-auto gap-5 justify-center'>
                                        <h3 className='bg-pink-400 text-[16px] font-bold rounded-2xl px-12 py-3'>{price} BDT</h3>
                                        <h3 className='bg-pink-400 text-[16px] font-bold rounded-2xl px-12 py-3'>BED: {bedType}</h3>
                                    </div>
                                    <h1 className='mt-9 mb-3 '>please give your booking date</h1>
                                    <form onSubmit={handleConfirm} >
                                        <input type="date" name='date' className="input mb-9 bg-pink-300 text-black" />



                                        <div className="modal-action  justify-center">

                                            {/* if there is a button, it will close the modal */}


                                            <button onClick={() => document.getElementById('my_modal_4').close()} type='submit' className="btn">Confirm</button>
                                        </div>
                                    </form>

                                </div>
                            </dialog> : <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box bg-white">
                                    <h3 className="font-bold text-lg">This room is already booked!</h3>

                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;