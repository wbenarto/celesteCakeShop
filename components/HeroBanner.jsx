import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='hero-banner-container '>
            <img className='contrast-50 object-cover h-[500px] w-full ' src='/images/flower.jpg'></img>
            <div className='top-0  h-1/2 w-full absolute text-white text-center'>

                <h5 className='my-24 font-raleway text-4xl'>CELESTE CAKESHOP</h5>

                <h5 className='mb-10 font-body font-light text-5xl'>ORLANDO'S BEST DESIGNED <br /> BAKED GOODS</h5>
                <p className='font-display'>Beautifully crafted sweet treats for your sweetest moments.</p>


                <div className='relative'>
                    <Link href={`/product/${heroBanner.product}`}>
                        <button type='button'>{heroBanner.buttonText}</button>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default HeroBanner