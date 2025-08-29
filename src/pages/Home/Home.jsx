import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotelCard from '../../Components/HotelCard';
// import { Map, Marker, } from 'pigeon-maps';
// import { Link } from 'react-router';
// import { Carousel } from 'react-responsive-carousel';
 import { motion } from "framer-motion";
 import '../../App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Modal from '../../Components/Modal';
import HomeSections from '../../Components/Homesections';

const Home = () => {

    const [hotels, setHotels] = useState([]);
    // const radissonCoords = [22.3476, 91.8231];

    useEffect(() => {
        axios.get('https://hotel-server-side-mu.vercel.app/topratedhotels').then(res => {
            const sliceData = res.data.slice(0, 6)
            setHotels(sliceData)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div >
            {/* <Modal></Modal> */}

            <div className="relative flex">

                <div className="flex flex-1/3">
                    <div className="lg:flex-1">
                        <img
                            className="h-[650px] w-full object-cover opacity-80"
                            src="https://i.ibb.co.com/rGK87Q2V/banner1.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-[650px] w-full object-cover opacity-80"
                            src="https://i.ibb.co.com/nsGrg9sM/banner2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="lg:flex-1">
                        <img
                            className="h-[650px] w-full object-cover opacity-80"
                            src="https://i.ibb.co.com/TM6S9QJB/banner3.jpg"
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <img
                        className="h-[650px] w-full object-cover opacity-80"
                        src="https://i.ibb.co.com/Y7SsyKYV/banner4.jpg"
                        alt=""
                    />
                </div>


                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>


                <div className="absolute inset-0 pt-25 flex flex-col justify-center bg-gradient-to-r from-black/80 to-transparent items-start px-10 lg:max-w-2/5">
                    <h1 className="lg:text-center text-5xl md:text-6xl beau  font-bold text-white drop-shadow-lg">
                        Book  Moments, Not Just Rooms
                    </h1>
                    <p className="mt-7 castoro text-center text-lg  text-white max-w-xl drop-shadow-md">
                        Book your dream stay in seconds — comfort, luxury, and the best deals await you
                    </p>
                </div>
            </div>





           







            <motion.h1
                initial={{ opacity: 0, x: 20, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.2 }}
                className='text-3xl mt-30 text-center my-9 font-bold fascinate-inline-regular text-amber-700'>Top Rated Rooms</motion.h1>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-5 mx-4'>
                {

                    hotels.map(hotel => <HotelCard key={hotel.roomId} hotel={hotel}></HotelCard>)
                }
            </div> */}

            <HomeSections></HomeSections>




        </div>
    );
};

export default Home;