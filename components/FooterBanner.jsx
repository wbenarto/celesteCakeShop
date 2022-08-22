import React from 'react'
import Link from 'next/link'
import Map from '../pages/map/index.js'
import { AiFillInstagram, AiFillMail } from 'react-icons/ai'

const FooterBanner = () => {
    return (
        <div className='h-[400px] w-full py-10 sm:py-2 sm:px-6 px-10 flex'>
            <div className='w-1/2 h-full'>

                <Map />
            </div>
            <div className='w-1/2 text-center'>
                <h3 className='pb-10 text-6xl font-display'>Contact Us</h3>

                <div className='flex  items-center py-4 justify-center '>
                    <Link href=' https://www.instagram.com/celestecakeshop/'>
                        <AiFillMail className='mx-4 text-4xl' />
                    </Link>
                    <div>celestecakeshop@gmail.com</div>
                </div>

                <div className='flex  items-center justify-center '>
                    <Link href=' https://www.instagram.com/celestecakeshop/'>
                        <AiFillInstagram className='mx-4 text-4xl' />
                    </Link>
                    <div>CelesteCakeShop</div>
                </div>

            </div>
        </div>
    )

}

export default FooterBanner