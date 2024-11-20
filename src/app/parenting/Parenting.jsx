"use client"
import React from 'react'
import image1 from "./maskgroup.png";
import { useState,useEffect } from 'react';
import Link from 'next/link';
import axios from '../../lib/axios.js';


const Parenting = () => {
  const [parenting, setPDocTalk] = useState([]);
  const [popularPtr,setPopularPtr] = useState(0);
  const [lang,setLang] = useState("");


const mostPopular = async () => {
  try {
    const response = await axios.get(`api/parentings?pagination[start]=${popularPtr}&pagination[limit]=8&sort[0]=view:desc&populate=*`);
    console.log(response.data.data);
    const tempData = [...parenting,...response.data.data]
    setPDocTalk(tempData);
    setPopularPtr(popularPtr+9);
  } catch (error) {
    console.error("Error fetching parentings:", error);
  }
};


useEffect(() => {
  mostPopular(); 
}, []);


const imageLink = (parentings) => {
  return "http://localhost:1337/"+parentings?.media[0].formats.thumbnail.url;
}

  return (
    <>
    <div  className="text-[#06382C]">
        <div className="lg:flex md:flex justify-evenly items-center mt-5 text-[#06382C]">
          <div className="w-full pl-32">
            <h1 className="text-6xl font-bold">Kiddocracy - </h1>
            <h2 className="text-5xl font-bold">Parenting Made Simple </h2>
          </div>
          <div className="w-full">
            <img className="" src={image1.src} alt="Default Img" width={780} />
          </div>
        </div>
        
        <div className="bg-[#FAFBFD] pb-20">
          <div className="py-20 w-full text-center text-[#06382C]">
            <p className="text-5xl font-semibold pb-8">Article</p>
            <p className="text-xl">We spread awareness and information threw...</p>
          </div>
          
          <div className="flex justify-between flex-wrap mx-20">
              {  parenting.map((parentings,ind)=>
                  <Link href={"parenting/"+parentings.documentId} key={ind} className="max-w-[320px] shadow-lg shadow-[#95bff0] rounded-lg my-5 pb-5">
                      <img src={imageLink(parentings)} className='bg-gray-300 p-10 w-full object-contain max-h-[200px] rounded-lg' alt="Image s" width={"240px"} height={"340px"} />
                      <p className="px-2 text-[#06382C] font-bold text-xl my-3">{
                          lang==="Eng" ? parentings.title??"" : parentings.titleHindi??"" 
                        }</p>
                      <p className="px-2 italic font-semibold py-2">{
                          lang==="Eng" ? parentings.description.substring(0,25) + "..." : parentings.descriptionHindi.substring(0,25) + "..."
                        }</p>
                      
                  </Link>
                  )}
          </div>
        </div>
    </div>
    </>
  )
}

export default Parenting;
