"use client"
import React from 'react';
import image from '../../image/home.png'; // Replace with your image path
import { IoMdBookmarks } from "react-icons/io";

const Kahani = () => {
  return (
    <section className="flex flex-col items-center justify-evenly min-h-screen p-8 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">Kiddo's Kahani</h1>
        <p className="text-gray-600 mt-2">
          Let them watch some creative/informative/educational stories rather than troublesome content
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-12">
        {/* Left Side Image */}
        <div className="max-w-md">
          <img src={image.src} alt="Inspiring Story" className="rounded-lg shadow-lg w-full" />
        </div>

        {/* Right Side Story List */}
        <div className="flex flex-col space-y-6 max-w-md">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#05552b] p-3 rounded-full  text-3xl">
                <IoMdBookmarks color='white' />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Kahani {index}</h3>
                <p className="text-gray-600">
                  Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kahani;
