"use client"
import React, { useState } from 'react';
import '../../style/youtube.css'; // Keep any custom CSS here if needed
import image from '../../image/home.png';
import youtube from '../../image/image.png';

const Youtube = () => {
  const [videoType, setVideoType] = useState('Latest');
  const [postToggle,setPostToggle] = useState("Popular");

  return (
    <section className='youtube bg-gray-50 py-8 flex items-center justify-center min-h-screen px-[95px]'>
      <div className='youtube-header'>
        {/* Header content if needed */}
      </div>

      <div className="video-section container mx-auto px-4">
        {/* Navigation for selecting video type */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 text-center text-2xl border-b-2 my-10 ">
            <p onClick={()=> setPostToggle("Latest")} className={`${postToggle=="Latest"?"text-black  border-b-[3px] border-black transition-all":"text-gray-500"} py-7 cursor-pointer font-semibold`}>Latest</p>
            <p onClick={()=> setPostToggle("Popular")} className={`${postToggle=="Popular"?"text-black border-b-[3px] border-black transition-all":"text-gray-500"} py-7 cursor-pointer font-semibold`}>Popular</p>
            <p onClick={()=> setPostToggle("Oldest")} className={`${postToggle=="Oldest"?"text-black border-b-[3px] border-black transition-all":"text-gray-500"} py-7 cursor-pointer font-semibold`}>Oldest</p>
        </div>

        {/* Video cards section */}
        <div className='youtube-video-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="video-card bg-white p-4 rounded-lg lg:min-w-80 shadow-lg  mx-auto">
              <h1 className='video-title text-lg font-semibold mb-2 text-center'>Hello</h1>
              <img src={image.src} alt="video image" className="w-full h-32 object-cover mb-4 rounded-lg" />
              <div className="video-info text-center flex flex-row justify-evenly items-center ">
                <p className="views text-gray-600 text-sm py-2">345 views</p>
                <button className="btn bg-[#06382C] text-white py-2 px-4 rounded hover:bg-[#05552b]">
                  Play
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <img src={youtube.src} className='w-1/5 pt-32 m-auto cursor-pointer hover:scale-105' alt="Youtube Logo"  />
        </div>
      </div>
    </section>
  );
}

export default Youtube;
