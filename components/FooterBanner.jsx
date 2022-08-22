import React from 'react'
import Link from 'next/link'
import Map from '../pages/map/index.js'
import { AiFillInstagram, AiFillMail } from 'react-icons/ai'

const FooterBanner = () => {
    return (
        <div className='md:h-[400px] w-full py-10 sm:py-2 sm:px-6 px-10 md:flex'>
            <div className='h-[200px] w-full mb-5 md:w-1/2 md:h-full'>

                <Map />
            </div>
            <div className=' w-full md:w-1/2 text-center'>
                <h3 className='pb-10 text-xl md:text-6xl font-display'>Contact Us</h3>

                <div className='flex hover:cursor-pointer items-center py-4 justify-center '>
                    <Link passHref={true} href='https://www.instagram.com/celestecakeshop/'>
                        <AiFillMail className='mx-4 text-4xl' />
                    </Link>
                    <div className='text-sm md:text-lg'>celestecakeshop@gmail.com</div>
                </div>

                <div className='flex hover:cursor-pointer items-center justify-center '>
                    <Link passHref={true} href='https://www.instagram.com/celestecakeshop/'>
                        <AiFillInstagram className='mx-4 text-4xl' />
                    </Link>
                    <div className='text-sm md:text-lg'>CelesteCakeShop</div>
                </div>

            </div>
        </div>
    )

}

export default FooterBanner