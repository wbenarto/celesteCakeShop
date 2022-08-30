import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price } }) => {

    return (
        <div key={slug} className='h-[16rem] md:h-[24rem] cursor-pointer  overflow-hidden  '>
            <Link href={`/product/${slug.current}`}>
                <div className="text-[#324d67] h-[11rem] md:h-[18rem] " >
                    <div className='h-full '>
                        <img src={urlFor(image && image[0])}

                            className='object-cover rounded-md w-full h-full'
                        ></img>
                    </div>
                    <div className='h-full flex-column space-between p-2   md:text-base'>
                        <p className=' text-sm md:h-auto md:text-lg font-bold font-futura '>{name}</p>
                        <p className=' md:h-auto font-futura text-gray-400 text-xs md:text-base font-bold'>$ {price}</p>

                    </div>



                </div>
            </Link>
        </div>
    )
}

export default Product