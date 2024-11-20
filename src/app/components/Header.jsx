"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 border-b-2 border-[#163F4D]">
      {/* Logo */}
      <div className="text-gray-700 font-bold text-2xl lg:text-3xl ml-4">
        Kiddocracy
      </div>

      {/* Desktop Navbar Links */}
      <div className="hidden md:flex md:w-2/3 lg:w-1/2 justify-end items-center">
        <ul className="flex space-x-4 text-gray-700 font-medium">
          <Link href={"/"} className="hover:cursor-pointer">Video</Link>
          <Link href={"/parenting"} className="hover:cursor-pointer">Parenting</Link>
          <Link href={"/doctalk"} className="hover:cursor-pointer">Doc Talk</Link>
          <Link href={"/kiddos-kahani"} className="hover:cursor-pointer">Kiddos Kahani</Link>
          <Link href={"/"} className="hover:cursor-pointer">FuGen</Link>
          <Link href={"/login"} className="border-l-2 border-black pl-4 hover:cursor-pointer">Login</Link>
          <li href={"/"} className="flex items-center border-2 border-black bg-[#06382C] text-white rounded-md px-2 py-1 text-sm">
            <span className="bg-[#FDE953] text-black px-1 rounded">EN</span>
            <span className="ml-2">HN</span>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t-2 border-[#163F4D] z-50">
          <ul className="flex flex-col items-center text-gray-700 font-medium space-y-4 py-4">
            <li className="hover:cursor-pointer">Video</li>
            <li className="hover:cursor-pointer">Parenting</li>
            <li className="hover:cursor-pointer">Doc Talk</li>
            <li className="hover:cursor-pointer">Kiddos Kahani</li>
            <li className="hover:cursor-pointer">FuGen</li>
            <li className="border-t border-black pt-2 hover:cursor-pointer">Login</li>
            <li className="flex items-center border-2 border-black bg-[#06382C] text-white rounded-md px-2 py-1 text-sm">
              <span className="bg-[#FDE953] text-black px-1 rounded">EN</span>
              <span className="ml-2">HN</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
