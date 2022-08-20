import React from 'react'
import { Product, FooterBanner, HeroBanner, InstagramPosts } from '../components'

import { client } from '../lib/client'

const Home = ({bannerData, products}) => {
  // console.log(bannerData, products)
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='h-8 w-full text-white grid content-center text-center bg-gradient-to-r from-[#f7abdb] to-purple-500 '>
        <h1 className='self-center font-body '>
          Baked with the finest natural ingredients. 
        </h1>
      </div>
   
        <div className='flex flex-row my-20 h-96 px-32'>
          <div className='w-1/2 my-auto'>
            <h2 className='text-red-300 text-6xl'>Custom Cake Order</h2>
            <p className='py-10 '>We take Custom Design Cake pre-orders for your special occassion. Send us your design! </p>
            <h1 className='font-bold'>Made especially for you</h1>
          </div>
          <div className='w-1/2 flex justify-end '>
            <img src='/images/bday1.jpg' alt='' className='h-full w-[90%] object-cover' ></img>
          </div>
        </div>
      
      
      <div className='my-20 text-center'>
        <h2 className=' text-red-300 text-4xl'>Other Baked Goods</h2>
        <div className='products-container'>
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

