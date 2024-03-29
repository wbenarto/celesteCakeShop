import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import { urlFor } from '../lib/client'

const HeroBanner = () => {
    
    const hero = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.move', { y: '100%', opacity: 0, zIndex:1 }, { y: 0, duration: .5, delay: 1, opacity: 1 ,zIndex:1})
        
        const el = hero.current
        const allEl = el.querySelectorAll(".hero")

        gsap.to(allEl,  {
            y: 200,
            duration: 1,
            stagger: 0.2,
            opacity: 0,
            scrollTrigger: {
              trigger: allEl,
              start: "top 30%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          })

    }, [])
    return (

        <div className='z-0 w-full h-screen sticky top-0'>
            <div className='flex md:bg-fixed bg-center bg-cover md:bg-[length:full_100%] items-center justify-center w-full h-full my-auto text-center'>
                <video autoPlay muted loop playsInline className="background-video object-cover absolute w-full h-full z-0">
                    <source src="/images/anim.mp4" alt='vid' type="video/mp4" />
                </video>
                <div ref={hero} className='bg-[rgba(0,0,0,0.4)] w-full h-full justify-center items-center flex z-10'>
                    <div className='hero w-[80%] md:max-w-[60%] md:mt-[-2rem] items-center '>
                        <h1 className='hero move text-5xl md:text-6xl lg:text-8xl font-mont tracking-widest2 text-[#ffe5d9]'>CELESTE</h1>
                        <p className='hero move text-[#c6ac8f] mt-1 font-aug font-bold text-2xl md:text-4xl '>Cake Design</p>
                    
                        <h2 className='hero move mt-10  text-md  md:text-2xl font-mont text-white'>Welcome to our Orlando-based bakery, where we craft unforgettable moments with our custom-designed cakes tailored to elevate every occasion with sweetness and style. </h2>
                    </div>
                </div>                 
            </div>
            
            {/* <div className=' flex bg-[url("/images/home.jpg")] md:bg-fixed bg-center bg-cover md:bg-[length:full_100%] items-center justify-center w-full h-full my-auto text-center'>
            </div> */}
        </div>

    )
}

export default HeroBanner