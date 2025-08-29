import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotelCard from './Components/HotelCard';
import { motion } from "framer-motion";

const AllRooms = () => {
    const [hotels, setHotels] = useState([]);

    const [sort, setSort] = useState('');

    useEffect(() => {
        let url = 'https://hotel-server-side-mu.vercel.app/hotels';
        if (sort) {
            url += `?sort=${sort}`;
        }

        axios.get(url)
            .then(res => setHotels(res.data))
            .catch(err => console.error(err));
    }, [sort]);
    return (
        <div>
             <motion.h1 
            initial={{ opacity: 0, x: 20, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2}}
             className='text-3xl text-center my-9 font-bold fascinate-inline-regular text-amber-700'>~~All Rooms~~</motion.h1>

            <div className='mb-4 mx-4 md:mx-12 '>
                <label className='font-bold text-[20px] lilita-one-regular my-15 dark:text-white '>Sort by:</label>
                <select onChange={(e) => setSort(e.target.value)} className='ml-2 my-15 border text-black px-2 py-1 bg-blue-100 rounded'>
                    <option value="">Default</option>
                    <option value="price_asc">Price Low to High</option>
                    <option value="price_desc">Price High to Low</option>
                    
                    
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-5 mx-4'>
                {

                    hotels.map(hotel => <HotelCard key={hotel.roomId} hotel={hotel}></HotelCard>)
                }
            </div>
        </div>
    );
};

export default AllRooms;