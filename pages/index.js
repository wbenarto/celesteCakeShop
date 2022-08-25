import React from 'react'
import { Product, FooterBanner, HeroBanner, InstagramPosts } from '../components'
import Link from 'next/link'
import { client } from '../lib/client'
import { urlFor } from '../lib/client'

const Home = ({bannerData, products}) => {
  // console.log(bannerData, products)
  return (
    <>
     
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='h-[16rem] w-full text-[#324d67] grid content-center text-center bg-white  '>
        <h1 className='self-center text-xs md:text-md font-nav tracking-widest '>
          Baked with the finest natural ingredients. 
        </h1>
      </div>
   
        <div className='flex my-2 py-5 md:my-20 h-[16rem] px-4 gap-4 md:px-20 md:h-[600px] '>
          <div className='w-1/2  '>
            <img src='/images/bday1.jpg' alt='' className='border-4 border-white mt-[-80px]  object-cover' ></img>
          </div>
          <div className='w-1/2 flex-column my-auto'>
            <h2 className='text-[#324d67] text-lg font-bold md:text-6xl'>Custom Cake Order</h2>
            <p className='py-4 md:py-10 md:text-lg text-xs '>We take Custom Design Cake pre-orders for your special occassion. Send us your design! </p>
            <p className='font-bold text-sm'>Made especially for you</p>
            <Link href='/menu/custom'>
            <button className='bg-red-300 w-24 h-8 text-sm md:w-[150px] md:h-14  border-2 rounded-md mt-4 text-center flex justify-center text-white items-center' type='button'>Order Here</button>
            </Link>
          </div>
        
        </div>

        <div className='w-full z-2 bg-white border-white border-2 h-[16rem] overflow-hidden'>
          <img src='/images/cupcake.jpg' className='contrast-50 w-full h-full object-cover object-center '></img>
        </div>
      
      
      <div className=' md:my-20 h-[16rem]  md:h-[600px] text-center '>
        <h2 className='text-[#324d67] pt-4 text-lg font-bold md:text-4xl'>Other Baked Goods</h2>
        <div className='flex flex-wrap justify-center gap-[10px] mt-4 w-full'>
          {products.map((e,i) => (
            <div className='w-1/4 h-32 bg-white '>
                <img className='rounded-md ' src={urlFor(e.image && e.image[0])} />
                <p className='text-xs'>{e.name}</p>
            </div>
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
  // console.log(bannerData, products)
  return {
    props: {products, bannerData}
  }
}

export default Home

