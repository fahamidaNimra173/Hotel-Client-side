import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotelCard from './Components/HotelCard';

const AllRooms = () => {
    const [hotels, setHotels] = useState([]);

    const [sort, setSort] = useState('');

    useEffect(() => {
        let url = 'http://localhost:5000/hotels';
        if (sort) {
            url += `?sort=${sort}`;
        }

        axios.get(url)
            .then(res => setHotels(res.data))
            .catch(err => console.error(err));
    }, [sort]);
    return (
        <div>

            <h1 className='text-3xl text-center my-9 ' >All Rooms</h1>
            <div className='mb-4'>
                <label className='font-semibold '>Sort by:</label>
                <select onChange={(e) => setSort(e.target.value)} className='ml-2 border text-black px-2 py-1 bg-blue-100 rounded'>
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