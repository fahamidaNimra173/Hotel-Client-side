import { Marker } from 'pigeon-maps';
import React from 'react';

const FindUs = () => {
    return (
        <section class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16">
  <div class="max-w-6xl mx-auto px-6">

    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-[#a8cc61] dark:text-[#7a9e33]">Find Us</h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Experience the perfect blend of comfort and luxury at Auris Hotel, located in the heart of Chattogram’s vibrant <strong>Lalkhan Bazar</strong>. 
        We’re easy to reach, surrounded by shopping centers, local attractions, and business hubs.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h3 class="text-2xl font-semibold mb-4 text-[#a8cc61] dark:text-[#7a9e33]">Our Location</h3>
        <p class="mb-4">
          Auris Hotel is situated in <strong>Lalkhan Bazar, Chattogram</strong>, a prime location known for its lively atmosphere and excellent connectivity. 
          Whether you’re visiting for business or leisure, our central position makes it easy to explore the city’s famous restaurants, shopping malls, and cultural landmarks.
        </p>
        <ul class="space-y-3">
          <li>📍 <strong>Address:</strong> Auris Hotel, Lalkhan Bazar, Chattogram, Bangladesh</li>
          <li>📞 <strong>Phone:</strong> <a href="tel:01569029731" class="hover:underline text-[#a8cc61] dark:text-[#7a9e33]">01569029731</a></li>
          <li>📧 <strong>Email:</strong> <a href="mailto:fahmidanimra@gmail.com" class="hover:underline text-[#a8cc61] dark:text-[#7a9e33]">fahmidanimra@gmail.com</a></li>
        </ul>
        <p class="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Open 24/7 — We’re always ready to welcome you.
        </p>
      </div>

      <div class="rounded-lg overflow-hidden shadow-lg">
       <Marker></Marker>
      </div>
    </div>

    <div class="mt-12 text-center">
      <p class="text-lg">
        Need help finding us? Call or email anytime — our team is happy to guide you.  
        We look forward to welcoming you to <span class="text-[#a8cc61] dark:text-[#7a9e33] font-semibold">Auris Hotel</span>.
      </p>
    </div>

  </div>
</section>

    );
};

export default FindUs;