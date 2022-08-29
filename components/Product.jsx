import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price } }) => {

    return (
        <div key={slug} className='h-[21rem] md:h-[24rem] cursor-pointer rounded-md overflow-hidden bg-[rgba(172,98,98,0.1)]'>
            <Link href={`/product/${slug.current}`}>
                <div className="text-[#324d67] h-[16rem] md:h-[20rem] " >
                    <div className='h-full '>
                        <img src={urlFor(image && image[0])}

                            className='object-cover w-full h-full'
                        ></img>
                    </div>
                    <div className='h-[3rem] p-2 md:px-4 md:text-base'>
                        <p className='h-[2rem] md:h-auto md:text-lg font-futura '>{name}</p>
                        <p className='h-[1rem] md:h-auto font-futura text-sm font-bold'>$ {price}</p>

                    </div>



                </div>
            </Link>
        </div>
    )
}

export default Product