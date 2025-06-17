import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const HotelCard = ({hotel}) => {
    const {roomId,name,description,availability,image,price}=hotel
  
    return (

            






    <div className="relative w-full max-w-md md:max-w-sm sm:max-w-full overflow-hidden rounded-2xl shadow-lg group mx-auto">
      <img
        src={image}
        alt="Hotel Room"
        className="w-full h-96 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-10 left-4 bg-black/60 px-6 py-4 rounded text-white text-[15px] font-medium group-hover:opacity-0 transition duration-300 w-[90%] sm:text-sm">
        {name} – BDT-{price}
        <p className="text-center">
          {availability ? "Available" : "Unavailable"}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-yellow-200/20 to-transparent backdrop-blur-sm flex flex-col md:flex-row justify-end md:justify-between items-start md:items-center px-6 py-6 md:py-8 opacity-0 group-hover:opacity-100 transition duration-500"
      >
        <div className="text-white md:max-w-[60%]">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm mt-1 text-black line-clamp-3">{description}</p>
          <span className="text-lg font-semibold mt-2 block">BDT-{price}</span>
        </div>

        <div className="mt-4 md:mt-0 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded shadow-md">
          <Link to={`/roomDetails/${roomId}`}>
            <button>Book Now</button>
          </Link>
        </div>
      </motion.div>
    </div>
  


       
    );
};

export default HotelCard;