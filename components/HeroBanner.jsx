import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

import { urlFor } from '../lib/client'

const HeroBanner = () => {

    useEffect(() => {
        gsap.fromTo('.move', { y: '100%', opacity: 0, z:0 }, { y: 0, duration: .5, delay: 1, opacity: 1 ,z:0 })
    }, [])
    return (

        <div className=' w-full h-screen flex justify-center items-center   max-h-screen '>
            {/* <img className=' h-screen object-cover     ' src='/images/flower.jpg'></img> */}
            {/* <div className='absolute w-full h-screen bg-[rgba(0,0,0,0.5)] z-[1]'></div> */}
            <div className=' flex bg-[url("/images/home.jpg")] md:bg-fixed bg-center bg-cover md:bg-[length:full_100%] items-center justify-center w-full h-full my-auto text-center'>
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-full justify-center items-center flex'>
                    <div className='w-full h-1/3 mt-20 '>
                        <h1 className='text-5xl md:text-5xl z-1 lg:text-6xl font-hero font-bold tracking-widest text-white'>CÉLESTE</h1>
                        <p className='move text-red-300 font-aug text-2xl md:text-4xl '>Cake Design</p>
                        <p className='move text-xs  mt-10 w-[90%] mx-auto font-thin leading-relaxed text-white tracking-widest sm:w-[60%] sm:text-base '>Custom design cakes for any special occasion. Located in the heart of Orlando. Open for orders.</p>
                    </div>
                    

                </div>

            </div>
            {/* <div className=' w-full z-0 h-screen bg-[url("/images/flower.jpg")] bg-cover max-h-screen'>where</div> */}

        </div>

    )
}

export default HeroBanner