import React from "react";

export default function AboutUs() {
  return (
    <div className="md:my-5 px-4 lg:px-28">
      {/* Banner with image */}
      <div className="relative mt-20 md:h-[600px] rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://i.ibb.co/LdCmQ309/Blue-and-White-Simple-Hotel-Promotion-Presentation.jpg"
          alt="Hotel Banner"
          className="w-full my-5 h-full object-contain"
        />
        {/* Overlay */}
        <div className="absolute  " />
       
        <div className="absolute top-3/5 mt-5 bg-white/60 sm:bg-none md:top-2/3 lg:left-8 left-2 transform -translate-y-1/2 max-w-lg  px-6 py-2 lg:p-6 md:p-12  castoro font-bold text-[#445c12] md:text-lg text-[10px] md:text-[20px]">
          Welcome to Serenity Stays — where comfort meets elegance and every guest is family.
        </div>
      </div>

      {/* Our Story section */}
      <section className="mt-16 max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-600 inline-block pb-2">
          Our Story
        </h2>

        {/* Founding */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">How It All Began</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Serenity Stays was founded in 1998 by John Matthews, a visionary with a passion for hospitality and a dream to create a sanctuary for travelers seeking comfort and elegance. Starting as a small boutique hotel nestled in the heart of the city, it quickly earned a reputation for personalized service and attention to detail.
          </p>
        </div>

        {/* Growth */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Our Growth Journey</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Over the past two decades, Serenity Stays has expanded its footprint, evolving into a premier hotel known for blending modern luxury with authentic warmth. Our team has grown to over 150 dedicated professionals, all committed to ensuring each guest feels valued and cared for throughout their stay.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">What We Offer</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            From indulgent spa treatments and gourmet dining to 24/7 concierge services and serene infinity pools, we offer a comprehensive suite of amenities designed to elevate your experience. Every detail is thoughtfully crafted to exceed expectations and provide a seamless blend of relaxation and convenience.
          </p>
        </div>

        {/* Values & Trust */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Why Trust Us</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Serenity Stays, integrity, transparency, and genuine care are the foundation of everything we do. Our commitment to continuous improvement and environmental responsibility reflects our respect for our guests, community, and planet. Thousands of loyal guests return year after year, trusting us to deliver exceptional hospitality every time.
          </p>
        </div>
      </section>
    </div>
  );
}
