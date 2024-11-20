/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'
import defaultImg from "./gallery.png";
import { useParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const Article = () => {

  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState(null);
  const [recentPost, setRecentPost] = useState([]);

  const getRecentPost = async () => {
    try {
      const response = await axios.get(`http://localhost:1337/api/doctalks?populate=*`);
      const data = response.data.data;
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setRecentPost(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching recent posts:", error);
    }
  };

  const getCurrentPost = async () => {
    try {
      const response = await axios.get(`http://localhost:1337/api/doctalks/${id}?populate=*`);
      const data = response.data.data;
      setCurrentPost(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching current post:", error);
    }
  };

  useEffect(() => {
    getCurrentPost();
    getRecentPost();
  }, []);

  return (
    !currentPost ? <h2>Hello</h2> :
    <div>
      <div className="px-20 my-10">
        <img
          src={currentPost?"http://localhost:1337/"+currentPost?.media[0]?.formats?.thumbnail?.url : defaultImg.src}
          alt="Image"
          className="min-w-full shadow-lg shadow-[#95bff09d] rounded-lg object-contain m-auto max-h-[25rem] py-10"
        />
        <h1 className="text-[#06382C] font-bold text-4xl mt-5">
          {currentPost.title || "Loading..."}
        </h1>
        <p className="text-[#06382C] italic font-semibold bg-yellow-300 w-fit px-2 mx-1 my-4">
          By {currentPost.author || "Unknown Author"}
        </p>
      </div>
      <div className="bg-[#F3F3F3] px-20 italic leading-10 font-semibold text-[20px] py-5">
        {currentPost.talk || "Loading story..."}
      </div>
      <div className="text-[#06382C] px-[50px]">
        <h1 className="text-center font-bold text-5xl text-[#06382C] m-10">Recent Posts</h1>
        <div className="flex justify-between gap-[4rem] px-4">
          {recentPost.slice(0, 3).map((post) => (
            <Link href={post.documentId} key={post.id} className="">
              <img
                src={"http://localhost:1337/"+post?.media[0]?.formats?.thumbnail?.url || defaultImg.src}
                alt="Recent post image"
                className="w-full px-20 py-10 max-h-[300px] shadow-lg shadow-[#95bff0] mb-4 rounded-lg"
              />
              <h2 className="text-[#06382C] text-3xl font-bold px-7 pt-4">
                {post.title || "Untitled"}
              </h2>
              <p className="text-[#06382C] italic font-semibold px-2 bg-yellow-300 w-fit mx-7 my-4">
                By {post.author || "Unknown Author"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
