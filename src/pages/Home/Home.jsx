import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotelCard from '../../Components/HotelCard';
import { Map, Marker, } from 'pigeon-maps';


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


            <div className="relative h-[500px] w-full">
                <img
                    src="https://i.ibb.co/NgC67wNd/view-romantic-castle-bedroom.jpg"
                    alt="Banner Background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute top-4 left-6 z-10">
                    <img
                        src="https://i.ibb.co/tMx5YDRR/346743-PBCAER-386.jpg"
                        alt="logo"
                        className="h-12"
                    />
                </div>
                <div className="absolute bottom-8 w-full text-center z-10">
                    <h1 className="text-white text-4xl font-bold">Welcome to Your Luxury Stay</h1>
                    <p className="text-white text-lg mt-2">Experience comfort, elegance, and relaxation</p>
                </div>
            </div>



            <h1 className='text-3xl text-center my-9'>Top Rated Rooms</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-5 mx-4'>
                {

                    hotels.map(hotel => <HotelCard key={hotel.roomId} hotel={hotel}></HotelCard>)
                }
            </div>
            <div className='my-11 '>
                <h1 className='text-3xl font-bold mx-7 my-6 text-amber-600 '>Live Hotel Location</h1>
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