"use client"
import React from 'react'
import { useState } from 'react'

const IntroVideo = ({setIsOpenVideo}) => {

    const toggleVisibility = () =>{
        setIsOpenVideo(false);
    }

  return (
    <div onClick={toggleVisibility} className='fixed min-h-full min-w-full top-0 z-10 backdrop-blur-xl flex justify-center items-center'>
      <iframe width="660" height="415" src="https://www.youtube.com/embed/yN8VXmncvRU?si=K-OmKmsAFh879DCf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
    </div>
  )
}

export default IntroVideo
