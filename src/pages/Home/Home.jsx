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
        <div className='bg-[#fffcec] dark:bg-[#fffcec]' >
            {/* <Modal></Modal> */}

            <div className="relative flex">

                <div className="flex flex-1/3">
                    <div className="lg:flex-1">
                        <img
                            className="h-[650px] hidden sm:block w-full object-cover opacity-90"
                            src="https://i.ibb.co.com/rGK87Q2V/banner1.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-[650px] w-full object-cover opacity-9=70 sm:opacity-80"
                            src="https://i.ibb.co.com/nsGrg9sM/banner2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="lg:flex-1">
                        <img
                            className="h-[650px] w-full object-cover  sm:opacity-80"
                            src="https://i.ibb.co.com/TM6S9QJB/banner3.jpg"
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <img
                        className="h-[650px]  sm:w-full object-cover sm:opacity-80"
                        src="https://i.ibb.co.com/Y7SsyKYV/banner4.jpg"
                        alt=""
                    />
                     <div className="absolute sm:hidden inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>

                </div>


                <div className="absolute hidden sm:block inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>


                <div className="absolute inset-0  text-center sm:text-left pt-60 sm:pt-25 flex flex-col justify-center sm:bg-gradient-to-r sm:from-black/80 sm:to-transparent bg-gradient-to-r from-black/40 to-transparent items-start px-6 sm:px-10 lg:max-w-2/5">
                    <h1 className="lg:text-center text-5xl md:text-6xl beau  font-bold text-white drop-shadow-lg">
                        Book <span className='sm:text-[#ac6f26] text-[#f39726]  '>Moments</span>, Not Just <span className='sm:text-[#ac6f26] text-[#f39726]'>Rooms</span>
                    </h1>
                    <p className="pt-10 sm:mt-7 castoro text-center text-lg  text-white max-w-xl drop-shadow-md">
                        Book your dream stay in seconds — comfort, luxury, and the best deals await you
                    </p>
                </div>
            </div>





           







            <motion.h1
                initial={{ opacity: 0, x: 20, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.2 }}
                className='text-5xl castoro   mt-30 mb-10 md:my-30 text-center  font-bold fascinate-inline-regular text-[#ac6f26]'>Top Rated Rooms</motion.h1>
                
            <div className='grid grid-cols-1 sm:px-10 px-4 md:grid-cols-3 lg:grid-cols-4 gap-2.5 lg:gap-5 mx-2'>
                {

                    hotels.map(hotel => <HotelCard key={hotel.roomId} hotel={hotel}></HotelCard>)
                }
            </div>

            <HomeSections></HomeSections>




        </div>
    );
};

export default Home;