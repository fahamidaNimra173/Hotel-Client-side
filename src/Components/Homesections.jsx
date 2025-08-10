import React from 'react';
import { motion } from 'framer-motion';
import { FaSpa, FaConciergeBell, FaSwimmer, FaWifi, FaUtensils, FaStar } from 'react-icons/fa';

const HomeSections = () => {
  return (
    <div className='my-30 space-y-30 px-2 lg:px-28'>
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
          className="cinzel shadow-2xl shadow-black text-white  text-3xl md:text-5xl font-bold p-6 md:p-12 absolute mt-10 top-0  left-10 right-0 z-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Promise,  <span className='text-shadow-2xs shadow-2xl shadow-black'>Your Comfort</span>
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

      <div className='md:flex max-h-min gap-3 flex-col py-20 px-2 md:px-10 lg:px-20 md:flex-row bg-[#fdf7c4] '>
        <div className='flex-1'>
          <div className='flex flex-col group'>
            <h1 className='cinzel mb-15 text-4xl text-[#f8952a] transition-all duration-700 transform -translate-x-10  group-hover:translate-x-0 group-hover:opacity-100'>
              <span className='md:ml-52 ml-10 text-[#a8cc61]'>A Morning </span>
              <br />
              Worth Waking Up For
            </h1>
            <img
              className='h-52 object-cover shadow-2xl rounded-b-md shadow-white transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-2'
              src="https://i.ibb.co.com/nsmFRWFh/breakfast-at-caravelle-saigon-5500238-1280.jpg"
              alt=""
            />
            <p className='castoro my-15 text-[18px] text-emerald-700 font-bold transition-all duration-700 transform translate-y-10  group-hover:translate-y-0 group-hover:opacity-100'>
              Start your day with our complimentary gourmet breakfast, freshly prepared to please every taste.
              Enjoy fluffy pancakes drizzled with golden honey, buttery croissants, and freshly baked pastries alongside seasonal fruits and creamy yogurts.
              For a heartier start, savor crispy parathas, succulent grilled meats, and farm-fresh eggs cooked just the way you like.
              Paired with aromatic coffee, soothing teas, and fresh juices, our breakfast is more than a meal — it’s the perfect beginning to your day.
            </p>
          </div>
        </div>

        <div className='flex-1'>
          <div className='flex bg-black flex-col gap-3 rounded-2xl'>
            <div className='flex lg:grid lg:grid-cols-5 gap-3'>
              <div className='col-span-3 group'>
                <img
                  className='rounded-tl-2xl object-cover md:h-96 w-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-2'
                  src="https://i.ibb.co.com/Tqq1S0F6/table-2600954-1280.jpg"
                  alt=""
                />
              </div>
              <div className='col-span-2 group'>
                <img
                  className='rounded-tr-2xl md:h-96 w-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:-rotate-2'
                  src="https://i.ibb.co.com/KcBT4QMq/pastries-1749603-1280.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className='col-span-3 rounded-b-2xl group'>
              <img
                className='rounded-b-2xl transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-2'
                src="https://i.ibb.co.com/0jnHFNdx/breakfast-4474527-1280.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default HomeSections;
