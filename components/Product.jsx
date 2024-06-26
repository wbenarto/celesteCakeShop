import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price } }) => {

    return (
        <div key={slug} className=' min-w-[14rem]  min-h-full sm:min-w-[16rem] cursor-pointer  overflow-hidden  '>
            <Link href={`/product/${slug.current}`}>
                <div className="text-[#324d67]  " >
                    <div className='h-[16rem] sm:h-[18rem]  md:h-[20rem] lg:h-[28rem] '>
                        <img src={urlFor(image && image[0])}
                            className='object-cover w-full h-full'
                        ></img>
                    </div>
                    <div className='h-full flex-column space-between p-2   md:text-base'>
                        <p className='text-center text-sm md:h-auto md:text-lg font-bold font-futura '>{name}</p>
                        {/* <p className=' md:h-auto font-futura text-gray-400 text-xs md:text-base font-bold'>$ {price}</p> */}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product