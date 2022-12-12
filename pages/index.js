import React, { useEffect, useRef } from 'react'
import { Product, FooterBanner, HeroBanner, InstagramPosts } from '../components'
import Link from 'next/link'
import { client } from '../lib/client'
import { urlFor } from '../lib/client'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const Home = ({bannerData, products}) => {
  // console.log(bannerData, products)
  gsap.registerPlugin(ScrollTrigger)
  const midSec = useRef(null)

  
  // useEffect(() => {
  //   gsap.to("#thirdCircle", {
  //     x: 100,
  //     duration: 5,
  //     scrollTrigger: {
  //       trigger: "#thirdCircle",
  //       markers: true,

  //     }
  //   });
  // }, []);
  // useEffect(()=>{
  //   gsap.to(midSec.current, {scrollTrigger: {
  //     trigger:midSec.current,
  //     markers: true,
  //     start: "top center",
  //     end: 'bottom top'
  //   }, x:100 ,scale:1.5, duration:2, ease:'power2.easeIn'})
    
  // }, [])
  return (
    <>

      <HeroBanner />
      <div className='h-[12rem] w-full text-[#324d67] grid content-center text-center bg-white overflow-hidden '>
      {/* <div className='bg-[url("/images/bday1.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full h-screen '></div> */}

        <h1 ref={midSec} className='midSec self-center  md:text-3xl lg:text-4xl font-aug tracking-widest '>
          Baked with the finest natural ingredients. 
        </h1>
      </div>
   
        <div className='bg-gray-100 md:px-20 flex-column md:gap-10 h-[44rem] md:h-[32rem] xl:px-48 overflow-hidden md:mx-auto md:justify-center md:flex '>
          <div className='w-full px-10 md:px-0 h-[22rem] md:h-3/7 md:my-auto md:w-1/3 thirdCircle after:border-10 after:border-black'>
            <img src='/images/bday1.jpg' alt='' className=' object-cover object-center h-full w-full' ></img>
          </div>
          <div className='w-full h-[22rem] md:h-full md:w-1/2  my-auto grid float-right p-4  '>
            <div className='my-auto w-[80%] md:w-full mx-auto'>
              <p className='font-mont text-2xl text-center md:text-4xl pb-10 md:pb-20'>Bring a smile to your celebration, meeting, or event with our baked treats.</p>

              {/* <h2 className='text-gray-500 text-2xl text-center font-hero font-semibold  md:text-3xl'>CUSTOM CAKE ORDER</h2>
              <p className='font-aug text-lg text-center md:text-4xl pb-4'>Made especially for you</p>
              <p className='py-4 md:py-10  mx-auto md:text-lg text-xs '>We take Custom Design Cake pre-orders for your special occassion. Send us your design! </p>
               */}
              <Link href='/menu/custom'>
              <button className=' bg-red-300 text-xs md:text-sm mx-auto w-40 h-10 gap-2 md:w-[150px] md:hover:animate-wiggle md:h-14 rounded-full mt-4 text-center flex justify-center text-white items-center' type='button'>ORDER HERE <AiOutlineArrowRight className='text-lg'/></button>
              </Link>

            </div>
            
          </div>
        </div>

        <div className='h-[12rem] w-full text-[#324d67] grid content-center text-center bg-white overflow-hidden '>
      {/* <div className='bg-[url("/images/bday1.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full h-screen '></div> */}

        <h1 className='self-center md:text-3xl lg:text-4xl font-aug  tracking-widest '>
          We do delivery within one mile of our pick up spot. 
        </h1>
      </div>
      <div className='bg-[url("/images/IMG_9544_jpg.jpg")]  bg-cover md:px-20 flex-column md:gap-10 h-[14rem] md:h-[32rem] xl:px-48 overflow-hidden mx-auto items-center justify-center flex '>
          
          
            <div className='my-auto w-[80%] rounded-md md:w-full mx-auto bg-[rgba(0,0,0,0.5)] p-4'>
              <h2 className='text-red-200 text-4xl text-center font-mont font-semibold w-full md:text-6xl'>Joy baked into every bite.</h2>
              <p className='text-white font-hero text-base text-center md:text-2xl pt-4 md:pt-10 '>Happy to see you. Happier to serve you.</p>

              {/* <h2 className='text-gray-500 text-2xl text-center font-hero font-semibold  md:text-3xl'>CUSTOM CAKE ORDER</h2>
              <p className='font-aug text-lg text-center md:text-4xl pb-4'>Made especially for you</p>
              <p className='py-4 md:py-10  mx-auto md:text-lg text-xs '>We take Custom Design Cake pre-orders for your special occassion. Send us your design! </p>
               */}
            
            </div>
            
        </div>
        {/* <div className='w-full z-2 bg-white border-white border-2 h-[12rem] overflow-hidden'>
          
         
           <img src='/images/cupcake.jpg' className='fixed contrast-50 w-full h-full object-cover object-center '></img> 
           <div className='bg-[url("/images/cupcake.jpg")] bg-fixed bg-cover bg-center bg-no-repeat min-w-full h-screen '></div> 
        </div> */}
      
      
      {/* <div className='grid px-8 min-h-full h-[44rem] text-center mx-auto md:max-w-[1200px]'>
        <div className=' my-auto overflow-hidden'>
           <h2 className=' text-gray-500  text-2xl  font-hero font-semibold md:text-3xl md:py-8'>OTHER BAKED GOODS</h2>
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
       
      </div> */}
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

