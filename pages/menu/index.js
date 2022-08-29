import React from 'react'
import Link from 'next/link'
import { client, } from '../../lib/client';
import {Product} from '../../components/'

const menu = ({products}) => {
    // console.log(products)
  return (
    <div className='min-h-full pt-[80px] bg-white sm:px-14 md:px-24 lg:px-48 py-4 '>
        <div className='pt-10 flex-column border-2 h-40 bg-white  border-gray-400 overflow-hidden text-center justify-center'>
            {/* <img src='/images/bday1.jpg' className='w-full h-full absolute object-contain' ></img> */}
            <p className='py-2 font-bold text-xl'>Custom Design Your Cake</p>
            
            <Link href='/menu/custom'>
                <button className='bg-red-300 w-24 h-10 md:w-[150px] md:h-14 mx-auto border-2 rounded-md text-center flex justify-center text-white items-center' type='button'><p>Order Here</p></button>
            </Link>
        </div>
        <div className='h-full'>
            {/* <div className='w-full h-14 px-4 flex justify-between items-center'>
                <p>ALL</p>
                <p>CAKES</p>
                <p>CUPCAKES</p>
                <p>COOKIES</p>
                
            </div> */}
            <div className='w-full h-full px-4 grid mt-8 gap-2 md:gap-10 grid-cols-2 lg:grid-cols-4'>
            
                {products.length ? products?.map((e)=>(
                    <Product product={e} key={e.id} />
                )) : (
                    <>
                        <p>

                        </p>
                    </>
                )}
            </div>
            
            
        </div>
    </div>
    
  )
}

export async function getServerSideProps(context) {

    const query = `*[_type == "product"]`
    const products = await client.fetch(query)
  
    return {
      props: {products }
    }
}


export default menu