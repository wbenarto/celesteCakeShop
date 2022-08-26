import React from 'react'
import { Product, FooterBanner, HeroBanner, InstagramPosts } from '../components'
import Link from 'next/link'
import { client } from '../lib/client'
import { urlFor } from '../lib/client'

const Home = ({bannerData, products}) => {
  // console.log(bannerData, products)
  return (
    <div className=''>

      <HeroBanner />
      <div className='h-[12rem] w-full text-[#324d67] grid content-center text-center bg-white overflow-hidden '>
      {/* <div className='bg-[url("/images/bday1.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full h-screen '></div> */}

        <h1 className='self-center text-lg md:text-2xl lg:text-3xl font-nav tracking-widest '>
          Baked with the finest natural ingredients. 
        </h1>
      </div>
   
        <div className='flex-row my-2 py-5 md:my-20 h-[24rem] px-4 gap-4 md:gap-14 md:px-20 lg:px-32 md:h-[30rem]  '>
          <div className='w-1/2 absolute  z-1 px-4 lg:px-0'>
            <img src='/images/bday1.jpg' alt='' className='border-4 border-white mt-[-80px] md:mt-[-120px] lg:max-h-[900px] md:p-2 lg:p-4 object-cover' ></img>
          </div>
          <div className='w-3/4 md:w-1/2  relative mt-32 float-right bg-white p-4  '>
            <h2 className='text-[#324d67] text-lg font-hero md:text-4xl'>Custom Cake Order</h2>
            <p className='py-4 md:py-10 md:text-lg text-xs '>We take Custom Design Cake pre-orders for your special occassion. Send us your design! </p>
            <p className='font-bold text-sm'>Made especially for you</p>
            <Link href='/menu/custom'>
            <button className='bg-red-300 w-24 h-8 text-sm md:w-[150px] md:h-14  border-2 rounded-md mt-4 text-center flex justify-center text-white items-center' type='button'>Order Here</button>
            </Link>
          </div>
        
        </div>

        <div className='h-[12rem] w-full text-[#324d67] grid content-center text-center bg-white overflow-hidden '>
      {/* <div className='bg-[url("/images/bday1.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full h-screen '></div> */}

        <h1 className='self-center text-lg md:text-2xl lg:text-3xl font-nav tracking-widest '>
          We do delivery within one mile of our pick up spot. 
        </h1>
      </div>

        {/* <div className='w-full z-2 bg-white border-white border-2 h-[12rem] overflow-hidden'>
          
         
           <img src='/images/cupcake.jpg' className='fixed contrast-50 w-full h-full object-cover object-center '></img> 
           <div className='bg-[url("/images/cupcake.jpg")] bg-fixed bg-cover bg-center bg-no-repeat min-w-full h-screen '></div> 
        </div> */}
      
      
      <div className='grid my-auto md:my-10 min-h-full h-[30rem] md:h-[36rem] text-center mx-auto md:max-w-[1200px]'>
        <div className='w-full h-[20rem] bg-white absolute mt-[10%] skew-y-[190deg]'></div>
        <h2 className='relative text-[#324d67] pt-14 md:pt-8  text-lg  font-hero md:text-2xl lg:text-3xl'>Other Baked Goods</h2>
        <div className=' relative px-4 grid grid-cols-3 gap-[10px] md:gap-[4rem] mt-4 w-full '>
          {products.map((e,i) => (
            <div className=''>
                <img className='rounded-md pb-2' src={urlFor(e.image && e.image[0])} />
                <p className='text-sm md:text-lg'>{e.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <InstagramPosts /> */}
      <FooterBanner />
    </div>
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

