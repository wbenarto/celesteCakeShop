import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = () => {
    return (

        <div className=' z-0 w-full h-screen flex justify-center items-center  bg-[url("/images/home.jpg")] bg-center-right bg-fixed bg-cover max-h-screen '>
            {/* <img className=' h-screen object-cover     ' src='/images/flower.jpg'></img> */}
            {/* <div className='absolute w-full h-screen bg-[rgba(0,0,0,0.5)] z-[1]'></div> */}
            <div className='bg-[rgba(0,0,0,0.5)] flex items-center justify-center w-full h-full my-auto text-center'>
                <div>
                    <h1 className='text-4xl font-hero tracking-widest text-white'>CELESTE</h1>
                    <p className='text-white'>Cake Design</p>

                </div>

            </div>
            {/* <div className=' w-full z-0 h-screen bg-[url("/images/flower.jpg")] bg-cover max-h-screen'>where</div> */}

        </div>

    )
}

export default HeroBanner

// bg-[url("/images/flower-2.jpg")]