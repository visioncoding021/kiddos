"use client"
import React, { useEffect } from 'react';
import axios from '../../lib/axios.js';
import { useState } from 'react';

const dummy = () => {

    const [pointer,setpointer] = useState(0);
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        popularPosts();
    },[]);

    const recentPosts = async() => {
        const response = await axios.get(`api/kahanis?pagination[start]=${pointer}&pagination[limit]=2&sort[0]=createdAt:desc&populate=*`);
        console.log(response.data.data);
        setpointer(pointer+3);
        setArticles(response.data.data);
    }
    
    const oldestPosts = async() => {
        const response = await axios.get(`api/kahanis?pagination[start]=${pointer}&pagination[limit]=2&sort[0]=createdAt`);
        console.log(response.data.data);
        setpointer(pointer+2);
        setArticles(response.data.data);
        
    }
    
    const popularPosts = async() => {
        const response = await axios.get(`api/kahanis?pagination[start]=${pointer}&pagination[limit]=2&sort[0]=view:desc&populate=*`);
        console.log(response.data.data);
        setpointer(pointer+2);
        setArticles(response.data.data);
    }


  return (
    <div>
        <button className='p-5 bg-blue-200 m-3' onClick={popularPosts}> Show Articles </button>
    </div>
  )
}

export default dummy