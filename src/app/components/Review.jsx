"use client";
import React, { useState } from 'react';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const reviews = [
  { id: 1, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "Wow... I am very happy to use this VPN.", image: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "It turned out to be more than my expectations.", image: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "There have been no problems so far.", image: 'https://via.placeholder.com/50' },
  { id: 4, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "LaslesVPN always the best.", image: 'https://via.placeholder.com/50' },
  { id: 5, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "Super satisfied with the service.", image: 'https://via.placeholder.com/50' },
  { id: 6, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "Totally recommend it to others.", image: 'https://via.placeholder.com/50' },
  { id: 7, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "Best VPN service ever.", image: 'https://via.placeholder.com/50' },
  { id: 8, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "I love it!", image: 'https://via.placeholder.com/50' },
  { id: 9, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "Perfect for my needs.", image: 'https://via.placeholder.com/50' },
  { id: 10, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "Highly recommended.", image: 'https://via.placeholder.com/50' },
  { id: 11, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "Great customer support.", image: 'https://via.placeholder.com/50' },
  { id: 12, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "Reliable and fast service.", image: 'https://via.placeholder.com/50' },
  { id: 13, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "Definitely a game changer.", image: 'https://via.placeholder.com/50' },
  { id: 14, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "Unbeatable service.", image: 'https://via.placeholder.com/50' },
  { id: 15, name: 'Viezrh Robert', location: 'Warsaw, Poland', rating: 4.5, review: "Love it, and I will continue using it.", image: 'https://via.placeholder.com/50' },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let slidesPerPage = 3; 
  const reviewsCount = reviews.length;

  const updateSlidesPerPage = () => {
    if (window.innerWidth < 768) {
      return 1; // Mobile: 1 card
    } else if (window.innerWidth < 1024) {
      return 2; // Medium: 2 cards
    }
    return 3; // Large: 3 cards
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + slidesPerPage) % reviewsCount);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - slidesPerPage + reviewsCount) % reviewsCount);
  };

  // Update slides per page when the window is resized
  React.useEffect(() => {
    const handleResize = () => {
      slidesPerPage = updateSlidesPerPage();
    };
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="p-8 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Trusted by Thousands of Happy Parents</h2>
      <p className="text-gray-500 mb-8">Reviews by Satisfied Parents</p>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${(currentIndex * (100 / slidesPerPage))}%)`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`flex-shrink-0 w-full ${slidesPerPage === 1 ? 'md:w-full' : slidesPerPage === 2 ? 'md:w-1/2' : 'md:w-1/3'} px-4`}
            >
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={review.image} alt="profile" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                    <p className="text-gray-500">{review.location}</p>
                  </div>
                  <div className="ml-auto text-gray-800 font-semibold">{review.rating}</div>
                </div>
                <p className="text-gray-600 italic">{review.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between mt-10 px-10">
          <button
            onClick={prevSlide}
            className="  transform -translate-y-1/2 bg-[#05552b] hover:bg-gray-300 p-4 rounded-full"
          >
            <FaArrowCircleLeft className="text-2xl text-white" />
          </button>

            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: Math.ceil(reviewsCount / slidesPerPage) }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentIndex(index * slidesPerPage)}
                  className={`h-3 w-3 rounded-full cursor-pointer ${
                    currentIndex === index * slidesPerPage ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
        </div>

          <button
            onClick={nextSlide}
            className=" right-2 top-1/2 transform -translate-y-1/2 bg-[#05552b] hover:bg-gray-300 p-4 rounded-full"
          >
            <FaArrowCircleRight className="text-2xl text-white" />
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
     
    </section>
  );
};

export default Review;
