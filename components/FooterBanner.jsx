import React from 'react'
import Link from 'next/link'
import Map from '../pages/map/index.js'

const FooterBanner = () => {
    return (
        <div className='h-[400px] w-full py-10 px-10 flex'>
            <div className='w-1/2 h-full'>

                <Map />
            </div>
            <div className='w-1/2 text-center'>
                <h3 className='pb-10 text-4xl font-display'>Contact Us</h3>
                <div>Email Us</div>
                <div>Instagram https://www.instagram.com/celestecakeshop/</div>
                <div>Instagram</div>
            </div>
        </div>
    )

}

export default FooterBanner