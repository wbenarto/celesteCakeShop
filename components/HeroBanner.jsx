import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='min-h-screen md:h-[500px] relative overflow-hidden '>
            <img className='contrast-50 object-cover min-h-screen md:h-[500px] w-full ' src='/images/flower.jpg'></img>
            <div className='top-[30%] px-4  absolute w-full text-white text-center'>

                {/* <img src='/images/celeste4.png' className='w-40 h-40 mx-auto my-10'></img> */}

                <h5 className='mb-10 font-body font-md text-3xl md:text-5xl'>ORLANDO'S BEST DESIGNED <br /> BAKED GOODS</h5>
                <p className='font-display text-sm md:text-md'>Beautifully crafted sweet treats for your sweetest moments.</p>


                <Link href={`/menu`}>
                    <button className='bg-red-300 w-24 h-10 md:w-[150px] md:h-14 mx-auto border-2 rounded-md mt-4 text-center flex justify-center items-center' type='button'>Shop Now</button>
                </Link>



            </div>
        </div>
    )
}

export default HeroBanner