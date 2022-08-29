import React from 'react'
import { Product, FooterBanner, HeroBanner, InstagramPosts } from '../components'
import Link from 'next/link'
import { client } from '../lib/client'
import { urlFor } from '../lib/client'

const Home = ({bannerData, products}) => {
  // console.log(bannerData, products)
  return (
    <>

      <HeroBanner />
      <div className='h-[12rem] w-full text-[#324d67] grid content-center text-center bg-white overflow-hidden '>
      {/* <div className='bg-[url("/images/bday1.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full h-screen '></div> */}

        <h1 className='self-center  md:text-3xl lg:text-4xl font-aug tracking-widest '>
          Baked with the finest natural ingredients. 
        </h1>
      </div>
   
        <div className=' px-8 flex-column   h-full my-4  md:gap-10 md:max-w-[1200px] md:min-h-[30rem] md:mx-auto  md:flex '>
          <div className='w-full md:w-1/2 '>
            <img src='/images/bday1.jpg' alt='' className='border-4  border-white  object-cover' ></img>
          </div>
          <div className='w-full z-2 h-auto mb-4 md:w-1/2 md:h-full md:my-auto  float-right p-4  '>
            <h2 className='text-white text-2xl font-hero font-semibold  md:text-5xl'>Custom Cake Order</h2>
            <p className='py-4 md:py-10 md:text-lg text-xs '>We take Custom Design Cake pre-orders for your special occassion. Send us your design! </p>
            <p className='font-bold text-sm pb-4'>Made especially for you</p>
            <Link href='/menu/custom'>
            <button className=' bg-red-300 w-24 h-8 text-sm md:w-[150px] md:h-14  border-2 rounded-md mt-4 text-center flex justify-center text-white items-center' type='button'>Order Here</button>
            </Link>
          </div>
        </div>

        <div className='h-[12rem] w-full text-[#324d67] grid content-center text-center bg-white overflow-hidden '>
      {/* <div className='bg-[url("/images/bday1.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full h-screen '></div> */}

        <h1 className='self-center md:text-3xl lg:text-4xl font-aug  tracking-widest '>
          We do delivery within one mile of our pick up spot. 
        </h1>
      </div>

        {/* <div className='w-full z-2 bg-white border-white border-2 h-[12rem] overflow-hidden'>
          
         
           <img src='/images/cupcake.jpg' className='fixed contrast-50 w-full h-full object-cover object-center '></img> 
           <div className='bg-[url("/images/cupcake.jpg")] bg-fixed bg-cover bg-center bg-no-repeat min-w-full h-screen '></div> 
        </div> */}
      
      
      <div className='grid px-8 min-h-full h-[36rem] md:h-[44rem] text-center mx-auto md:max-w-[1200px]'>
        <div className=' my-auto  overflow-hidden'>
           <h2 className=' text-white py-4 text-2xl  font-hero font-semibold md:text-5xl'>Other Baked Goods</h2>
          <div className='h-[26rem] py-4  flex overflow-x-scroll px-4 gap-6 md:gap-10 md:h-[34rem] mt-2 '>
            {products.map((e,i) => (
              <div className='grid min-w-[16rem] md:h-[30rem] bg-white rounded-md overflow-hidden '>
                  <div className='rounded-md w-full h-[18rem] md:h-[24rem]'>

                  <img className='h-full w-full object-cover ' src={urlFor(e.image && e.image[0])} />
                  </div>
                  <div>
                  <p className='self-center text-centermy-auto font-sans md:text-lg'>{e.name}</p>
                  <p>$ {e.price}</p>
                  </div>
              </div>
            ))}
          </div>
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

