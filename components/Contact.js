import React from 'react'
import FooterBanner from './FooterBanner'

function Contact() {
  return (
    <div className="grid bg-[#f5f2ec]  w-full mx-auto">
      <div className='w-full h-[24rem] md:h-[32rem] bg-[url("/images/IMG_4188.jpg")]  bg-bottom md:bg-center md:bg-fixed bg-cover flex justify-center items-center'>
        <div className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full">
          <h1 className="font-aug text-5xl mb-4 text-white font-bold tracking-wide ">
            Contact Us{" "}
          </h1>
        </div>
      </div>

      <div className="px-4  w-full md:w-[900px] mx-auto bg-white ">
        <FooterBanner />
      </div>
    </div>
  )
}

export default Contact