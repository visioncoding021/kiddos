"use client"
import React, { useEffect } from 'react'
import defaultImg from "./gallery.png";
import stories from "../stories.json";
import { useState } from 'react';
import axios from '../../lib/axios.js';
import Link from 'next/link';
import DotSpinner from '../components/Spinner.jsx';

const Doctalk = () => {

    const dummyTitle = "Lorem ipsum dolor sit amet consectetur. Mattis faucibus cras risus velit turpis sodales viverra.";
    const [postToggle, setPostToggle] = useState("Popular");
    const [PDocTalk, setPDocTalk] = useState([]);
    const [RDocTalk, setRDocTalk] = useState([]);
    const [popularPtr,setPopularPtr] = useState(0);
    const [recentPtr,setRecentPtr] = useState(0);

  const mostPopular = async () => {
    try {
      const response = await axios.get(`api/doctalks?pagination[start]=${popularPtr}&pagination[limit]=8&sort[0]=view:desc&populate=*`);
      console.log(response.data.data);
      const tempData = [...PDocTalk,...response.data.data]
      setPDocTalk(tempData);
      setPopularPtr(popularPtr+9);
    } catch (error) {
      console.error("Error fetching doctalks:", error);
    }
  };
  
  const recent = async() => {
    try {
      const response = await axios.get(`api/doctalks?pagination[start]=${recentPtr}&pagination[limit]=8&sort[0]=createdAt:desc&populate=*`);
      const tempData = [...RDocTalk,...response.data.data]
      setRDocTalk(tempData);
      setRecentPtr(recentPtr+9);
    } catch (error) {
      console.error("Error fetching doctalks:", error);
    }
  }

  const loadData = () => {
    if(postToggle==="Popular") mostPopular()
    else recent();
  }

  useEffect(() => {
    mostPopular(); 
    recent();
  }, []);


  const imageLink = (doctalks) => {
    return "http://localhost:1337/"+doctalks?.media[0].formats.thumbnail.url;
  }

  return (
    !RDocTalk ? <DotSpinner /> :
    <div>
      <div className="text-[#06382C] px-[50px]">
        <h1 className="text-center font-bold text-5xl text-[#06382C] m-10">Doctalks</h1>
        <div className="flex justify-between gap-[4rem] px-4">
            <Link href={"doctalk/"+PDocTalk[0]?.documentId} className=" ">
                <img src={imageLink(PDocTalk?PDocTalk[0]:"")??defaultImg.src} alt="Image s" className="w-full min-h-[300px] max-h-[300px] shadow-lg shadow-[#95bff0] mb-4 rounded-lg" />
                <h2 className="text-[#06382C] text-3xl font-bold px-7">{PDocTalk[0]?.title??dummyTitle}</h2>
                <p className="text-[#06382C] italic font-semibold px-2  bg-yellow-300 w-fit mx-7 my-4">By {PDocTalk[0]?.author??"Dr:XYZ"}</p>
            </Link>
            <Link href={"doctalk/"+PDocTalk[1]?.documentId} className=" ">
                <img src={imageLink(PDocTalk?PDocTalk[1]:"")??defaultImg.src} alt="Image s" className="w-full min-h-[300px] max-h-[300px]   shadow-lg shadow-[#95bff0] mb-4 rounded-lg" />
                <h2 className="text-[#06382C] text-3xl font-bold px-7">{PDocTalk[1]?.title??dummyTitle}</h2>
                <p className="text-[#06382C] italic font-semibold px-2  bg-yellow-300 w-fit mx-7 my-4">By {PDocTalk[1]?.author??"Dr:XYZ"}</p>
            </Link>
            <Link href={"doctalk/"+PDocTalk[2]?.documentId} className=" ">
                <img src={imageLink(PDocTalk?PDocTalk[2]:"")??defaultImg.src} alt="Image s" className="w-full min-h-[300px] max-h-[300px]  shadow-lg shadow-[#95bff0] mb-4 rounded-lg" />
                <h2 className="text-[#06382C] text-3xl font-bold px-7">{PDocTalk[3]?.title??dummyTitle}</h2>
                <p className="text-[#06382C] italic font-semibold px-2  bg-yellow-300 w-fit mx-7 my-4">By {PDocTalk[2]?.author??"Dr:XYZ"}</p>
            </Link>
            
        </div>
      </div>
      <div className="px-[5rem] py-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 text-center text-2xl border-b-2 ">
            <p onClick={()=>{setPostToggle("Popular"); }} className={`${postToggle=="Popular"?"text-black  border-b-[3px] border-black transition-all":"text-gray-500"} py-7 cursor-popularPtr font-semibold`}>Most Popular</p>
            <p onClick={()=> {setPostToggle("Recent"); }} className={`${postToggle=="Recent"?"text-black border-b-[3px] border-black transition-all":"text-gray-500"} py-7 cursor-popularPtr font-semibold`}>Recent</p>
        </div>
        <div className="flex justify-between flex-wrap my-10">
            {
               postToggle==="Popular"? PDocTalk.map((doctalks,ind)=>
                    <Link href={"doctalk/"+doctalks.documentId} key={ind} className="max-w-[320px] shadow-lg shadow-[#95bff0] rounded-lg my-5 pb-5">
                        <img src={imageLink(doctalks)} className='bg-gray-300 p-10 w-full object-contain max-h-[200px] rounded-lg' alt="Image s" width={"240px"} height={"340px"} />
                        <p className="px-2 text-[#06382C] font-bold text-xl my-3">{doctalks.title??""}</p>
                        <p className="px-2 italic font-semibold py-2">{doctalks.talk.substring(0,25) + "..."}</p>
                    </Link>
                ):RDocTalk.map((doctalks,ind)=>
                  <Link href={"doctalk/"+doctalks.documentId} key={ind} className="max-w-[320px] shadow-lg shadow-[#95bff0] rounded-lg my-5 pb-5">
                      <img src={imageLink(doctalks)} className='bg-gray-300 p-10 w-full object-contain max-h-[200px] rounded-lg' alt="Image s" width={"240px"} height={"340px"} />
                      <p className="px-2 text-[#06382C] font-bold text-xl my-3">{doctalks.title??""}</p>
                      <p className="px-2 italic font-semibold py-2">{doctalks.talk.substring(0,25) + "..."}</p>
                  </Link>
                )
            }
        </div>
        <div className="col-span-7 text-center w-[94%]">
          <button onClick={loadData} className={"border-2 rounded-md px-5 py-2 transition-all border-[#06382C] hover:bg-[#06382C] hover:text-white font-semibold"}> Show More Article </button>
        </div>
      </div>
    </div>
  )
}

export default Doctalk
