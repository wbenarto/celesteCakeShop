import React from 'react'
import { Product, FooterBanner, HeroBanner, InstagramPosts } from '../components'
import {  Head } from 'next/document'

import { client } from '../lib/client'

const Home = ({bannerData, products}) => {
  // console.log(bannerData, products)
  return (
    <>
     
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='h-8 w-full text-white grid content-center text-center bg-gradient-to-r from-[#f7abdb] to-purple-500 '>
        <h1 className='self-center text-xs md:text-md font-body '>
          Baked with the finest natural ingredients. 
        </h1>
      </div>
   
        <div className='flex flex-row my-2 py-10 md:my-20 h-96 px-4 md:px-32 '>
          <div className='w-1/2 my-auto flex-column content-start'>
            <h2 className='text-red-300 text-xl font-bold md:text-6xl'>Custom Cake Order</h2>
            <p className='py-4 md:py-10 md:text-lg text-xs '>We take Custom Design Cake pre-orders for your special occassion. Send us your design! </p>
            <h1 className='font-bold'>Made especially for you</h1>
          </div>
          <div className='w-1/2 flex justify-end '>
            <img src='/images/bday1.jpg' alt='' className='h-full w-[90%] object-cover' ></img>
          </div>
        </div>
      
      
      <div className='my-4 md:my-20 text-center '>
        <h2 className=' text-red-300 text-xl font-bold md:text-4xl'>Other Baked Goods</h2>
        <div className='flex flex-wrap justify-center gap-[15px] mt-10 w-full'>
          {products.map((e,i) => (
            <Product product={e} key={e.id} />
          ))}
        </div>
      </div>
      {/* <InstagramPosts /> */}
      <FooterBanner />
    </>
  )
}

export async function getServerSideProps(context) {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)
  console.log(bannerData, products)
  return {
    props: {products, bannerData}
  }
}

export default Home

