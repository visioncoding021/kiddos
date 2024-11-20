"use client"
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

function page() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    const changeImageHandler = (e) => {
      const file = e.target.files[0];
      setProfileImage(file);
    };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-[#06382C]">
        <h1 className="text-2xl font-bold mb-4 text-center">LOGIN</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="user-email" className="block text-sm font-medium text-gray-700">Contact Number :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="user-email"
              placeholder="Enter your Email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="user-password" className="block text-sm font-medium text-gray-700">Password :</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="user-password"
              placeholder="Enter your password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <input
              type="file"
              onChange={changeImageHandler}
              className="hidden"
              id="profile-image-input"
            />
            <button
              type="submit"
              className="px-4 py-2 w-full bg-[#06382C] text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              LOGIN
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an Account? <Link href="register" className="text-blue-500 hover:text-blue-700">sign-Up</Link>
        </p>
      </div>
    </div>
  )
}

export default page