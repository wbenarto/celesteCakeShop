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
              start: "top 40%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          })

    }, [])
    return (

        <div className='z-0 w-full h-screen sticky top-0'>
            <div className=' flex bg-[url("/images/home.jpg")] md:bg-fixed bg-center bg-cover md:bg-[length:full_100%] items-center justify-center w-full h-full my-auto text-center'>
                <div ref={hero} className='bg-[rgba(0,0,0,0.5)] w-full h-full justify-center items-center flex'>
                    <div className='hero w-full md:mt-[-2rem]  items-center '>
                        <h1 className='hero move text-4xl md:text-6xl font-mont tracking-widest2 text-[#ffe5d9]'>CELESTE</h1>
                        <p className='hero move text-[#c6ac8f] font-aug font-bold text-2xl md:text-4xl '>Cake Design</p>
                    </div>
                    

                </div>

            </div>
        </div>

    )
}

export default HeroBanner