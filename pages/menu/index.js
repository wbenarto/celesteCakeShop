import React from 'react'
import Link from 'next/link'
import { client, } from '../../lib/client';
import {Product} from '../../components/'

const menu = ({products}) => {
    console.log(products)
  return (
    <div className='min-h-full bg-[#fdf5dc]'>
        <div className='pt-10 flex-column border-2 h-40 border-white overflow-hidden text-center justify-center'>
            {/* <img src='/images/bday1.jpg' className='w-full h-full absolute object-contain' ></img> */}
            <p className='py-4 font-bold text-xl'>Custom Design Your Cake</p>
            
            <div className='h-10 w-24 bg-red-200 rounded-md grid mx-auto justify-center text-white items-center '><p>Order Here</p></div>
        </div>
        <div className='h-full'>
            <div className='w-full h-14 px-4 flex justify-between items-center'>
                <p>ALL</p>
                <p>CAKES</p>
                <p>CUPCAKES</p>
                <p>COOKIES</p>
                
            </div>
            <div className='w-full h-full px-4'>
            
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
        {/* <div className=' bg-gray-200 h-1/4 flex-column  text-center justify-center content-center'>
            
            <Link href={`/menu/cakes`}>
                <div className='w-2/3 h-1/4  py-5 bg-blue-300 grid mx-auto justify-center items-center '><p>CAKES</p></div>
            </Link>
            
        </div>
        <div className=' bg-gray-400 h-[200px] flex-column  flex text-center justify-center content-center'>
            
            <Link href={`/menu/cupcakes`}>
                <p className='py-4 text-xl'>Cupcakes</p>
            </Link>
            
        </div>
        <div className=' bg-gray-200 h-1/4  flex-column  text-center content-center'>
            <p className='py-4 text-xl'>Cookies</p>
            <Link href={`/menu/cookies`}>
                <div className='h-10 w-24 bg-red-300 grid mx-auto justify-center items-center '><p>Shop Here</p></div>
            </Link>
           
        </div> */}
    </div>
    
  )
}

export async function getServerSideProps(context) {


    const query = `*[_type == "product"]`
    const products = await client.fetch(query)
  
   
    // console.log(bannerData, products)
    // console.log(products)
    return {
      props: {products }
    }
}


export default menu