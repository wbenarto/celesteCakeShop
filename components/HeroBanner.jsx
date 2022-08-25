import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = () => {
    return (
        <div>       <div className='h-screen pt-[70%] overflow-hidden bg-[url("/images/flower-2.jpg")] bg-cover md:max-h-full sm:pt-[50%] md:pt-[40%] lg:pt-[25%]'>
            {/* <img className=' z-0    object-cover object-top  min-h-screen lg:min-w-screen md:h-[500px] w-full ' src='/images/flower.jpg'></img> */}

            <div className=' w-full  text-white text-center'>
                {/* <img src='/images/celeste4.png' className='w-40 h-40 mx-auto my-10'></img> */}

                <h5 className='font-hero tracking-widest text-5xl md:text-5xl'>CELESTE</h5><p className='mb-44 font-hero tracking-wide'>CAKE DESIGN</p>
                {/* <p className='font-display text-sm md:text-md'>Beautifully crafted sweet treats for your sweetest moments.</p> */}

                <Link href={`/menu`}>
                    <button className=' bg-red-300 w-24 h-10 md:w-[150px] md:h-14 mx-auto border-2 rounded-md text-center flex justify-center items-center' type='button'>Shop Now</button>
                </Link>
            </div>

        </div>

        </div>

    )
}

export default HeroBanner