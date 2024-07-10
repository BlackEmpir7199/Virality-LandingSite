import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-5 lg:mt-12">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide">Experience Virtual Reality with <br />
        <span className="bg-gradient-to-l font-semibold from-orange-900 to-orange-400 bg-clip-text text-transparent sm:text-6xl lg:text-8xl tracking-[12px]">Virality</span>
      </h1>
      <p className='mt-8 text-lg text-center text-neutral-500 max-w-4xl'>
        Experience the future of virtual reality with immersive, cutting-edge technology. Explore, interact, and transform your world like never before
      </p>
      <div className="flex justify-center my-10">
        <a href="Startforfree" className="bg-gradient-to-r from-orange-900 to-orange-500 px-3 py-2 rounded-md">Start for free</a>
        <a href="SignIn" className="py-2 px-3 mx-4 border rounded-md">Documentation</a>
      </div>
      <div className="flex mt-10 justify-center lg:mx-20 sm:mx-0">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-500 shadow-md mx-2 my-4" src={video1} type="video/mp4">
          Your Browser does not support videos
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-500 shadow-md mx-2 my-4" src={video2} type="video/mp4">
          Your Browser does not support videos
        </video>
      </div>
    </div>
  )
}

export default HeroSection