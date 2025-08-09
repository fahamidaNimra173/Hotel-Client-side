import React from 'react';
import { motion } from 'framer-motion';
import { FaSpa, FaConciergeBell, FaSwimmer, FaWifi, FaUtensils, FaStar } from 'react-icons/fa';

const HomeSections = () => {
  return (
    <div className='my-30 px-2 lg:px-28'>
      <div
        className="relative h-[500px] md:h-[600px] bg-cover bg-center flex flex-col justify-end"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/gMXcR2j4/Blue-and-White-Simple-Hotel-Promotion-Presentation.png')",
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 dark:bg-black/40" />

        {/* Title at top */}
        <motion.h1
          className="cinzel text-white  text-3xl md:text-5xl font-bold p-6 md:p-12 absolute mt-10 top-0  left-10 right-0 z-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Promise, Your Comfort
        </motion.h1>

        {/* Content (description) aligned bottom */}
        <div className="relative z-10 -mt-11 p-6 md:p-12">
          <motion.p
            className="castoro text-white text-[18px] font-semibold md:text-lg lg:ml-12 ml-5 p-6 md:p-6 mb-4 z-10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="hidden md:inline">
              We believe every stay should feel like coming home — only better. Our goal is to blend the warmth of genuine hospitality with the ease of modern convenience, creating a space where every guest feels valued, relaxed, and inspired to explore. From the smallest detail to the grandest view, we’re here to make your moments unforgettable.
            </span>
            <span className="md:hidden">
              Every stay should feel like home — only better. We blend warmth with convenience for unforgettable moments.
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HomeSections;
