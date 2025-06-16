import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotelCard from '../../Components/HotelCard';


const Home = () => {
  
      const [hotels, setHotels] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/topratedhotels').then(res=>{
        const sliceData=res.data.slice(0,6)
        setHotels(sliceData)
    }).catch(error=>{
        console.log(error)
    })
    },[])
   

    return (
        <div>
            <h1 className='text-3xl text-center my-9'>Top Rated Rooms</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-5 mx-4'>
                {

                     hotels.map(hotel=><HotelCard key={hotel.roomId} hotel={hotel}></HotelCard>)
                }
            </div>
            
        </div>
    );
};

export default Home;