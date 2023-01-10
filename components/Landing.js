import React, { useEffect, useRef } from 'react'
import { Product, FooterBanner, HeroBanner, InstagramPosts } from '../components'
import Link from 'next/link'
import { client } from '../lib/client'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FaBirthdayCake} from 'react-icons/fa'
import { GiCupcake, GiStairsCake } from 'react-icons/gi'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const Landing = ({bannerData, products}) => {
    gsap.registerPlugin(ScrollTrigger)
    const midSec = useRef(null)
  
  return (
    <>

      <HeroBanner />
      <div className='h-[12rem] w-full text-[#324d67] grid content-center text-center bg-gray-100 overflow-hidden '>
      {/* <div className='bg-[url("/images/bday1.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full h-screen '></div> */}

        <h1 ref={midSec} className='midSec self-center text-2xl md:text-3xl lg:text-4xl font-aug text-red-500  tracking-widest '>
          Baked with the finest natural ingredients. 
        </h1>
      </div>

      {/* What we offer FIRST SECTION*/}
      <div className='bg-[url("/images/pinkwave.svg")] bg-no-repeat sm:bg-repeat object-cover flex-column md:gap-4 h-[48rem] sm:h-[42rem]  overflow-hidden md:mx-auto md:justify-center md:flex md:px-32'>
        {/* Left */}
    
        <div className='my-auto px-6 md:px-0 md:w-full mx-auto py-12 justify-center'>
          <h1 className='font-mont text-2xl text-gray-600 font-semibold text-left md:text-4xl'>We offer Custom Designed Cakes for every occasion</h1>
          <p className='md:text-xl font-medium text-gray-600 py-4'>Send us your design! Then choose your base, fondant, and filling flavors from our delicious options  </p>
          <div className='w-full '>
            <div className='flex gap-2 py-2 px-4'>
              <div className='text-white w-14 h-14 md:w-20 md:h-20 bg-[#f5b2ca] rounded-md '><FaBirthdayCake className='w-full h-full p-2'/></div>
              <div>
                <h1 className='font-bold md:p-2 my-auto md:text-xl'>Birthday Cake</h1>
                <p className='md:px-2 my-auto'>Single layer cake </p>
              </div>
            </div>
            <div className='flex gap-2 py-2 px-4'>
              <div className='text-white w-14 h-14 md:w-20 md:h-20 bg-[#f5b2ca] rounded-md '><GiStairsCake className='w-full h-full p-2'/></div>
              <div>
                <h1 className='font-bold md:p-2 my-auto md:text-xl'>Wedding Cake</h1>
                <p className='md:px-2 my-auto'>Multi tiers cake</p>
              </div>
            </div>
            <div className='flex gap-2 py-2 px-4'>
              <div className='text-white w-14 h-14 md:w-20 md:h-20 bg-[#f5b2ca] rounded-md '><GiCupcake className='w-full h-full p-2'/></div>
              <div>
                <h1 className='font-bold md:p-2 my-auto md:text-xl'>Cupcakes</h1>
                <p className='md:px-2 my-auto'>Custom cupcakes by the dozen</p>
              </div>
            </div>
          </div>
          {/* <Link href='/menu/custom'>
          <button className=' bg-red-300 text-xs md:text-sm mx-auto w-40 h-10 gap-2 md:w-[150px] md:hover:animate-wiggle md:h-14 rounded-full mt-4 text-center flex justify-center text-white items-center' type='button'>ORDER HERE <AiOutlineArrowRight className='text-lg'/></button>
          </Link> */}
        </div>
        
       
        {/* Right */}
        <div className=' h-1/2 md:w-full mt-[-40px] md:mt-0 md:h-full thirdCircle '>
          <img src='/images/IMG_4196.PNG' alt='' className=' object-contain object-center h-full w-full' ></img>
        </div>
      </div>

        {/* <div className='h-[12rem] w-full text-[#324d67] grid content-center text-center bg-[url("/images/pinkwave_2.svg")] overflow-hidden '>
        </div> */}
      <div className='h-[12rem] w-full text-[#324d67] grid content-center text-center bg-gray-100 overflow-hidden '>
      {/* <div className='bg-[url("/images/bday1.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full h-screen '></div> */}

        <h1 ref={midSec} className='midSec self-center text-2xl md:text-3xl lg:text-4xl text-red-500  font-aug tracking-widest '>
          Personalized baked goods for you and your loved ones. 
        </h1>
      </div>

      <div className=' bg-[url("/images/pinkwave.svg")] flex-column md:gap-4 sm:h-[40rem] md:h-[44rem]  overflow-hidden lg:mx-auto lg:justify-center lg:flex sm:px-4 lg:px-24'>
        <div className=' rounded-md my-auto px-6 lg:px-0 lg:w-1/3 mx-auto py-12 justify-center '>
          
          <h1 className='font-mont text-2xl text-gray-600 font-semibold text-left md:text-4xl'>Recently Purchased</h1>
          <p className='text-grey-600 py-4'>We aim to have unique designed cake for all our patrons, so no cakes are built the same</p>
          <Link href='/menu'>
            <button className=' bg-red-300 text-xs md:text-sm mx-auto w-40 h-10 gap-2 md:w-[150px] md:hover:animate-wiggle md:h-14 rounded-full mt-4 text-center flex justify-center text-white items-center' type='button'>See Gallery <AiOutlineArrowRight className='text-lg'/></button>
          </Link> 
        </div>
        <div className='px-2 h-1/1 w-full thirdCircle overflow-x-scroll flex items-center gap-2 md:justify-center sm:justify-between '>
          <div className=' h-[20rem] min-w-[14rem] sm:w-[14rem] md:w-[20rem] md:h-[26rem] rounded-md p-2 md:p-2 bg-white shadow-xl '>
            <div className='h-[70%] w-full bg-yellow-200 rounded-lg mb-1 overflow-hidden '>
              <img className='object-cover object-bottom w-full h-full' src='/images/IMG_9544_jpg.jpg' />
            </div>
            <div className='w-full h-[30%] p-1'>
            <h1 className='text-xs font-bold md:text-xl pb-0.5 md:py-2'>
              Dozen Rose Cupcakes
            </h1>
            <p className='text-xs'>
              Lemon base cupcakes with Swiss Meringue Buttercream
            </p>
            </div>
          </div>
          <div className=' h-[20rem] min-w-[14rem] sm:w-[14rem] md:w-[20rem] md:h-[26rem] rounded-md p-2 md:p-2 bg-white shadow-xl '>
            <div className='h-[70%] w-full bg-yellow-200 rounded-lg mb-1 overflow-hidden '>
              <img className='object-cover object-bottom w-full h-full' src='/images/IMG_4188.jpg' />
            </div>
            <div className='w-full h-[30%] p-1'>
            <h1 className='text-xs font-bold md:text-xl pb-0.5 md:py-2'>
              2-Tiered Engagement 
            </h1>
            <p className='text-xs'>
              Classic Vanilla base with vanilla fondant layer
            </p>
            </div>
          </div>
          <div className=' h-[20rem] min-w-[14rem] sm:w-[14rem] md:w-[20rem] md:h-[26rem] rounded-md p-2 md:p-2 bg-white shadow-xl '>
            <div className='h-[70%] w-full bg-yellow-200 rounded-lg mb-1 overflow-hidden '>
              <img className='object-cover object-bottom w-full h-full' src='/images/IMG_0818_jpg.jpg' />
            </div>
            <div className='w-full h-[30%] p-1'>
            <h1 className='text-xs font-bold md:text-xl pb-0.5 md:py-2'>
              Winnie the Pooh
            </h1>
            <p className='text-xs'>
              Funfetti base with vanilla frosting
            </p>
            </div>
          </div>
          
          
        </div>
      </div>
      
      <div className='bg-[url("/images/IMG_9544_jpg.jpg")]  bg-cover my-auto flex-column md:gap-10 h-[20rem] md:h-[32rem] xl:px-48 overflow-hidden mx-auto items-center justify-center flex '>
          
          
            <div className='bg-[rgba(0,0,0,0.5)] w-full h-full justify-center items-center flex'>
                <div>
                    <h2 className='text-red-200 text-4xl text-center font-mont font-semibold w-full md:text-6xl'>Joy baked into every bite.</h2>
                    <p className='text-white font-hero text-base text-center md:text-2xl pt-4 md:pt-10 '>Happy to see you. Happier to serve you.</p>

                </div>

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

export default Landing