import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

import { urlFor } from '../lib/client'

const HeroBanner = () => {

    useEffect(() => {
        gsap.fromTo('.move', { y: '100%', opacity: 0, z:0 }, { y: 0, duration: .5, delay: 1, opacity: 1 ,z:0 })
    }, [])
    return (

        <div className=' w-full h-screen flex justify-center items-center  bg-[url("/images/home.jpg")] md:bg-fixed bg-center bg-cover md:bg-[length:full_100%] max-h-screen '>
            {/* <img className=' h-screen object-cover     ' src='/images/flower.jpg'></img> */}
            {/* <div className='absolute w-full h-screen bg-[rgba(0,0,0,0.5)] z-[1]'></div> */}
            <div className='bg-[rgba(0,0,0,0.3)] flex items-center justify-center w-full h-full my-auto text-center'>
                <div>
                    <h1 className='move  text-5xl md:text-5xl lg:text-7xl font-hero tracking-widest text-white'>CELESTE</h1>
                    <p className='move  text-white font-aug text-2xl md:text-4xl '>Cake Design</p>

                </div>

            </div>
            {/* <div className=' w-full z-0 h-screen bg-[url("/images/flower.jpg")] bg-cover max-h-screen'>where</div> */}

        </div>

    )
}

export default HeroBanner