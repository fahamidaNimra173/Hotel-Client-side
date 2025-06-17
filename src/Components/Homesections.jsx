import React from 'react';
import { motion } from 'framer-motion';
import { FaSpa, FaConciergeBell, FaSwimmer, FaWifi, FaUtensils, FaStar } from 'react-icons/fa';

const HomeSections = () => {
  return (
    <div className="space-y-24 mt-10">
      <section className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://i.ibb.co/4HWgYy3/attractive-african-woman-enjoying-face-massage-spa-salon.jpg"
            alt=""
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </motion.div>

        <div className="w-full md:w-1/2 space-y-5">
          <h2 className="text-3xl font-bold text-amber-700">Relaxing Spa & Hotel Facilities</h2>
          <p className="text-gray-600">
            Enjoy a premium experience with top-class spa treatments, modern amenities, and 24/7 service designed for your comfort and luxury.
          </p>
          <ul className="grid grid-cols-2 gap-4 text-gray-700 mt-4">
            <li className="flex items-center gap-2"><FaSpa className="text-amber-600" /> Wellness Spa</li>
            <li className="flex items-center gap-2"><FaConciergeBell className="text-amber-600" /> 24/7 Concierge</li>
            <li className="flex items-center gap-2"><FaSwimmer className="text-amber-600" /> Infinity Pool</li>
            <li className="flex items-center gap-2"><FaWifi className="text-amber-600" /> Free Wi-Fi</li>
            <li className="flex items-center gap-2"><FaUtensils className="text-amber-600" /> Gourmet Dining</li>
          </ul>
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-blue-800">Why Choose Our Hotel?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We ensure an unforgettable stay with unmatched service, modern design, and warm hospitality. Here’s what makes us different:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <FaStar className="text-amber-600 text-3xl mb-3" />
              <h3 className="font-semibold text-lg">Award-Winning Service</h3>
              <p className="text-sm text-gray-500 mt-2">Recognized for excellence in hospitality and customer satisfaction.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <FaWifi className="text-amber-600 text-3xl mb-3" />
              <h3 className="font-semibold text-lg">High-Speed Internet</h3>
              <p className="text-sm text-gray-500 mt-2">Stay connected with blazing-fast internet throughout the property.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <FaConciergeBell className="text-amber-600 text-3xl mb-3" />
              <h3 className="font-semibold text-lg">Personalized Experience</h3>
              <p className="text-sm text-gray-500 mt-2">We tailor your stay to meet your needs with exceptional attention to detail.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSections;
