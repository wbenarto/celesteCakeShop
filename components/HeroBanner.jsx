import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

import { urlFor } from '../lib/client'

const HeroBanner = () => {

    useEffect(() => {
        gsap.fromTo('.move', { y: '100%', opacity: 0, zIndex:1 }, { y: 0, duration: .5, delay: 1, opacity: 1 ,zIndex:1})
    }, [])
    return (

        <div className='z-0 w-full h-screen flex justify-center items-center max-h-screen sticky top-0'>
            <div className=' flex bg-[url("/images/home.jpg")] md:bg-fixed bg-center bg-cover md:bg-[length:full_100%] items-center justify-center w-full h-full my-auto text-center'>
                <div className='bg-[rgba(138,138,138,0.3)] w-full h-full justify-center items-center flex'>
                    <div className='w-full mt-28  items-center '>
                        <h1 className='move text-4xl md:text-6xl font-mont tracking-widest2 text-white'>CELESTE</h1>
                        <p className='move text-red-600 font-aug font-bold text-2xl md:text-4xl '>Cake Design</p>
                    </div>
                    

                </div>

            </div>
        </div>

    )
}

export default HeroBanner