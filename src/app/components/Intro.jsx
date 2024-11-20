"use client"
import React from 'react';
import intro from '../../image/home.png';
import { useState } from 'react';
import { FaPlay } from "react-icons/fa6";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoMdBookmarks } from "react-icons/io";
import { AiFillTrophy } from "react-icons/ai";
import IntroVideo from './IntroVideo';

const Intro = () => {

  const [isOpenVideo,setIsOpenVideo] = useState(false);

  return (
    <>
      {
        isOpenVideo ? <IntroVideo setIsOpenVideo={setIsOpenVideo} /> : <></> 
      }
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 lg:mt-8 space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Left Section */}
        <section className="lg:w-1/2 space-y-4">
          <p className="text-sm text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#06382C] mt-4">
            <span className="text-5xl font-extrabold">Kiddocracy - </span>Parenting Made Simple
          </h1>
          <p className="text-lg text-gray-500 mt-6">
            Welcome to Kiddocracy, where parenting meets play. Discover creative hacks, expert tips, and fun-filled activities to keep your little ones engaged while making family life a joyful adventure every day.
          </p>
          <div className="flex items-center space-x-4 bg-gradient-to-l from-transparent to-[#cef2ff] w-80 rounded-lg mt-8 p-6 lg:-ml-10 cursor-pointer" onClick={()=>setIsOpenVideo(true)}>
            <span className="p-2 bg-white rounded-full text-base"><FaPlay /></span>
            <span className="text-[#06382C]">The way of Parenting</span>
          </div>
          <button className="bg-[#06382C] text-white px-4 py-2 rounded-md mt-6 hover:bg-green-700">
            Learn more
          </button>
        </section>

        {/* Right Section - Image */}
        <section className="lg:w-1/2 text-center lg:pt-0 pt-4">
          <img src={intro.src} alt="Intro image showcasing the homepage content" className="w-full h-auto lg:mt-0 -mt-10 rounded-md" />
        </section>
      </div>

      {/* About Section */}
      <section className="text-center py-12 px-6 bg-gray-50">
        <h1 className="text-4xl font-light text-[#06382C] mb-4">Why Choose Kiddocracy?</h1>
        <p className="text-gray-600 mb-8">We are here to meet the specific needs of each and every family.</p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 max-w-5xl mx-auto">
          {/* Feature Item */}
          <div className="flex flex-col items-center text-[#06382C] w-80 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="bg-gray-100 text-4xl p-4 rounded-full mb-4"><IoInformationCircleSharp /></p>
            <p className="font-semibold text-xl">Inform</p>
            <p className="text-gray-600 text-center">Expert advice on child development and behavior</p>
          </div>

          {/* Feature Item */}
          <div className="flex flex-col items-center text-[#06382C] w-80 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="bg-gray-100 text-4xl p-4 rounded-full mb-4"><IoMdBookmarks /></p>
            <p className="font-semibold text-xl">Educate</p>
            <p className="text-gray-600 text-center">Homeschooling that is truly worth it</p>
          </div>

          {/* Feature Item */}
          <div className="flex flex-col items-center text-[#06382C] w-80 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="bg-gray-100 text-4xl p-4 rounded-full mb-4"><AiFillTrophy /></p>
            <p className="font-semibold text-xl">Progress</p>
            <p className="text-gray-600 text-center">Creating an environment crucial for their future</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
