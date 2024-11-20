import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-100  p-6  bottom-0 w-full px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
        
        {/* Contact Section */}
        <div className="flex flex-col space-y-2 col-span-2">
          <h1 className="text-5xl text-gray-700 font-bold -tracking-[2px]">Kiddocracy</h1>
          <h2 className="text-lg font-semibold pt-5 ">Contact</h2>
          <div className="flex items-center space-x-2">
            <MdEmail className='text-gray-500' /> 
            <p className="text-gray-500 font-semibold">Email : </p>
            <span>Kiddocracyy@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdPhone className='text-gray-500' />
            <p className="text-gray-500 font-semibold">Phone : </p>
            <span>+91-9560975558</span>
          </div>
          <div className="flex pt-[20px] space-x-3 bottom-[120px] ">
            <FaFacebook className="text-[#06382C] p-3 text-[40px] rounded-full shadow-lg  transition-all  bg-white hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="text-[#06382C] p-3 text-[40px] rounded-full shadow-lg  transition-all  bg-white hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="text-[#06382C] p-3 text-[40px] rounded-full shadow-lg  transition-all  bg-white hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="text-[#06382C] p-3 text-[40px] rounded-full shadow-lg  transition-all  bg-white hover:text-red-600 cursor-pointer" />
          </div>
        </div>
        
        {/* About Section */}
        <div className='space-y-5 text-black col-span-2  '>
          <h2 className="text-2xl font-semibold">About</h2>
          <ul className="space-y-6 ">
            <li><Link href="/" className="hover:underline">Youtube Videos</Link></li>
            <li><Link href="/parenting" className="hover:underline">Parenting</Link></li>
            <li><Link href="/doctalk" className="hover:underline">Doc Talk</Link></li>
            <li><Link href="/kiddos-kahani" className="hover:underline">Kiddos’ Kahani</Link></li>
            <li><Link href="/" className="hover:underline">FuGen</Link></li>
          </ul>
        </div>
        
        {/* Socials Section */}
        <div className='space-y-5 text-black '>
          <h2 className="text-3xl font-semibold">Socials</h2>
          <ul className="space-y-6">
            <li><a href="#" className="hover:underline">YouTube</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
          </ul>
        </div>
        
      </div>
      
      {/* Footer Bottom Section */}
      <div className="text-md font-semibold mt-8 border-t-2 border-gray-300 pt-4 text-center flex flex-wrap justify-between items-center text-black">
        <p className=''>©2022 Company Name. All rights reserved</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="hover:underline">Privacy & Policy</a>
          <a href="#" className="hover:underline">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
