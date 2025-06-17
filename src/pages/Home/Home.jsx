import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotelCard from '../../Components/HotelCard';
import { Map, Marker, } from 'pigeon-maps';
import { Link } from 'react-router';
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from '../../Components/Modal';

const Home = () => {
    
    const [hotels, setHotels] = useState([]);
    const radissonCoords = [22.3476, 91.8231];

    useEffect(() => {
        axios.get('http://localhost:5000/topratedhotels').then(res => {
            const sliceData = res.data.slice(0, 6)
            setHotels(sliceData)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div >
            <Modal></Modal>
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={4000}
      showArrows
      stopOnHover
      swipeable
      emulateTouch
      dynamicHeight={false}
    >
      <div className="relative h-[500px] w-full">
                <img
                    src="https://i.ibb.co/NgC67wNd/view-romantic-castle-bedroom.jpg"
                    alt="Banner Background"
                    className="h-full w-full object-cover brightness-40 "
                />
                <div className="absolute inset-0   bg-opacity-100"></div>
                <div className="absolute top-4 left-6 z-10">
                    <img
                        src="https://i.ibb.co/tMx5YDRR/346743-PBCAER-386.jpg"
                        alt="logo"
                        className="h-19 w-30"
                    />
                </div>
                <div className="absolute bottom-0  w-full lg:right-30 lg:w-[800px] text-center z-10 bg-white/10 backdrop-blur-md rounded-lg p-4">
                    <h1 className="text-white text-4xl font-bold lilita-one-regular">Welcome to Your Luxury Stay</h1>
                    <p className="text-white text-[20px] font-medium t mt-2">Experience comfort, elegance, and relaxation</p>
                    <Link to={'/allrooms'}> <button className='my-9 rounded-3xl font-bold bg-black border-none px-9 py-4 text-white'>Show All Rooms</button></Link>
                </div>
            </div>
       <div className="relative h-[500px] w-full">
                <img
                    src="https://i.ibb.co/QjhqC2NF/silhouette-palm-tree-with-umbrella.jpg"
                    alt="Banner Background"
                    className="h-full w-full object-cover brightness-40 "
                />
                <div className="absolute inset-0   bg-opacity-100"></div>
                <div className="absolute top-4 left-6 z-10">
                    <img
                        src="https://i.ibb.co/tMx5YDRR/346743-PBCAER-386.jpg"
                        alt="logo"
                        className="h-19 w-30"
                    />
                </div>
                <div className="absolute bottom-0  w-full lg:right-30 lg:w-[800px] text-center z-10 bg-white/10 backdrop-blur-md rounded-lg p-4">
                    <h1 className="text-white text-4xl font-bold lilita-one-regular">Stay in Style and Comfort</h1>
                    <p className="text-white text-[20px] font-medium t mt-2">Luxury living tailored just for you</p>
                   <Link to={'/allrooms'}> <button className='my-9 rounded-3xl font-bold bg-black border-none px-9 py-4 text-white'>Show All Rooms</button></Link>
                </div>
            </div>
      <div className="relative h-[500px] w-full">
                <img
                    src="https://i.ibb.co/4ng3qjLy/long-corridor-showcase.jpg"
                    alt="Banner Background"
                    className="h-full w-full object-cover brightness-40 "
                />
                <div className="absolute inset-0   bg-opacity-100"></div>
                <div className="absolute top-4 left-6 z-10">
                    <img
                        src="https://i.ibb.co/tMx5YDRR/346743-PBCAER-386.jpg"
                        alt="logo"
                        className="h-19 w-30"
                    />
                </div>
                <div className="absolute bottom-0  w-full lg:right-30 lg:w-[800px] text-center z-10 bg-white/10 backdrop-blur-md rounded-lg p-4">
                    <h1 className="text-white text-4xl font-bold lilita-one-regular">Discover Unmatched Serenity</h1>
                    <p className="text-white text-[20px] font-medium t mt-2">Your perfect getaway starts right here</p>
                    <Link to={'/allrooms'}> <button className='my-9 rounded-3xl font-bold bg-black border-none px-9 py-4 text-white'>Show All Rooms</button></Link>
                </div>
            </div>
    </Carousel>
          
            


            



            <motion.h1 
            initial={{ opacity: 0, x: 20, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2}}
             className='text-3xl text-center my-9 font-bold fascinate-inline-regular text-amber-700'>Top Rated Rooms</motion.h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-5 mx-4'>
                {

                    hotels.map(hotel => <HotelCard key={hotel.roomId} hotel={hotel}></HotelCard>)
                }
            </div>
            <div className='my-11 '>
                 <motion.h1 
            initial={{ opacity: 0, x: 100, scale: 0 }}
            whileInView={{ opacity: 1, x: [0, -10], scale: 1 }}
            transition={{ duration: 1.2}}
             className='text-3xl mx-5 md:mx-10 my-9 font-bold fascinate-inline-regular text-amber-700'>Live Hotel Location</motion.h1>
                
                <Map height={400} defaultCenter={radissonCoords} defaultZoom={15}>
                    <Marker anchor={radissonCoords}>
                        <img
                            src="https://i.ibb.co/nZvbkFK/2355144.jpg"
                            alt="Radisson Blu Hotel"
                            width={50}
                            height={50}
                        />
                    </Marker>
                </Map>
            </div>
        </div>
    );
};

export default Home;