import React, { useEffect, useRef } from 'react'
import { BirthdaySection, Product, FooterBanner, HeroBanner, InstagramPosts, Test } from '../components'
import Link from 'next/link'
import { client } from '../lib/client'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FaBirthdayCake} from 'react-icons/fa'
import { GiCupcake, GiStairsCake } from 'react-icons/gi'
import { HiOutlineCake } from 'react-icons/hi'
import { RiCake3Line, RiCake3Fill } from 'react-icons/ri'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const Landing = ({bannerData, products}) => {
    gsap.registerPlugin(ScrollTrigger)
    const midSec = useRef(null)
    const anim = useRef(null);
    const anim2 = useRef(null);
    const anim3 = useRef(null);
    const anim4 = useRef(null);
    useEffect(()=> {
      const el = anim.current
      const el2 = anim2.current
      const el3 = anim3.current
      const el4 = anim4.current
      const allEl = el.querySelectorAll(".anim-test")
      const allEl2 = el2.querySelectorAll(".anim2-me")
      const allEl3 = el3.querySelectorAll(".anim3-me")
      const allEl4 = el4.querySelectorAll(".anim4-me")
     
    
      // gsap.fromTo('.anim-test', 
      // { y: 0, width:'50%', opacity: 1, zIndex:1, ease:'power3.in' },
      // {
      //   y: -300,
      //   width:'80%',
      //   height: "screen",
      //   duration: .5,
      //   opacity: 1,
      //   scrollTrigger: {
      //     trigger: '.anim-test',
      //     start: "top 50%",
      //     end: "bottom 20%",
      //     toggleActions: "play none none reverse",
      //     markers: true
      //   },
      // })
      gsap.fromTo(allEl2,{
        y: 100,
        ease: "power3.in"
      }, {
        y: 0,
        duration: .3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: el2,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
      })
      gsap.fromTo(allEl3, {
        y: 100,
        opacity: 0,
        ease: "power3.in"
      }, {
        y: 0,
        duration: .2,
        stagger: 0.1,
        opacity: 1,
        scrollTrigger: {
          trigger: el3,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
      })
      gsap.fromTo(allEl4, {
        y: 10,
        opacity: 0,
        ease: "power3.in"
      }, {
        y: 0,
        duration: .2,
        stagger: 0.1,
        opacity: 1,
        scrollTrigger: {
          trigger: el4,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse"
        },
      });
    }, [])
  return (
    <>
      <HeroBanner />
      
      
      {/* Birthday Section - Custom design cake */}
      
      <div ref={anim} className='anim-test z-10 bg-white relative flex-column md:gap-4 h-full h-screen overflow-hidden md:mx-auto md:justify-center md:flex md:px-20 xlg:px-[18rem] '>
       
        {/* <BirthdaySection/>  */}
        {/* Left */}
        <div className='my-auto px-6 md:px-0 w-full  mx-auto py-12 justify-center'>
          <h1 className='anim-me font-mont text-2xl text-left md:text-6xl'>We offer Custom Designed Cakes for every occasion</h1>
          <p className='anim-me md:text-xl font-medium py-4'>Send us your design! Then choose your base, fondant, and filling flavors from our delicious options. Available for pickup and delivery in Orlando.  </p>
          <div className='anim-me w-full'>
            <div className='scroll-trigger flex gap-2 py-2 px-4 '>
              <div className='text-[#e6ccb2] w-14 h-14 md:w-20 md:h-20 rounded-md '><FaBirthdayCake className='w-full h-full p-2'/></div>
              <div>
                <h2 className='font-bold md:p-2 my-auto md:text-xl'>Birthday Cake</h2>
                <p className='md:px-2 my-auto'>Single layer cake </p>
              </div>
            </div>
            <div className='scroll-trigger flex gap-2 py-2 px-4'>
              <div className='text-[#e6ccb2] w-14 h-14 md:w-20 md:h-20 rounded-md '><GiStairsCake className='w-full h-full p-2'/></div>
              <div>
                <h2 className='font-bold md:p-2 my-auto md:text-xl'>Wedding Cake</h2>
                <p className='md:px-2 my-auto'>Multi tiers cake</p>
              </div>
            </div>
            <div className='scroll-trigger flex gap-2 py-2 px-4'>
              <div className='text-[#e6ccb2] w-14 h-14 md:w-20 md:h-20 rounded-md '><GiCupcake className='w-full h-full p-2'/></div>
              <div>
                <h2 className='font-bold md:p-2 my-auto md:text-xl'>Cupcakes</h2>
                <p className='md:px-2 my-auto'>Custom cupcakes by the dozen</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right */}
        <div  className='anim-me relative flex flex-direction:column md:w-full sm:mt-[-100px] md:mt-0 h-full thirdCircle  '>
          <div className='absolute w-1/3 h-1/5 mt-[10]
           sm:right-0 sm:w-2/3 sm:h-2/5
          rounded-lg overflow-hidden z-20'>
            <img src='/images/IMG_8697_jpg.jpg' alt='' className=' object-cover object-center h-full w-full' ></img>
          </div>
          <div className='absolute w-1/2 h-1/4 z-30 ml-[25%] mt-[28%]
          sm:w-2/3 sm:h-3/6 sm:mt-[320px] sm:ml-0 rounded-lg overflow-hidden z-10'>
            <img src='/images/IMG_4507_jpg.jpg' alt='' className=' object-cover  object-center h-full w-full ' ></img>
          </div>
          <div className='absolute w-1/3 right-0 mt-10
          sm:w-[60%]  sm:h-2/5 sm:ml-[250px] sm:mt-[400px] sm:bottom-0 rounded-lg overflow-hidden z-30'>
            <img src='/images/IMG_0533_jpg.jpg' alt='' className=' object-cover  object-center h-full w-full ' ></img>
          </div>
        </div>
      </div>


      {/* Mid section  */}
      <div ref={anim2} className=' z-10 relative h-[6rem] bg-[#e6ccb2] md:h-[12rem] w-full grid content-center text-center text-white overflow-hidden '>
        <div className='bg-white w-[80%]'>

        </div>
        {/* <h1 ref={midSec} className='anim2-me midSec self-center text-base md:text-3xl lg:text-4xl tracking-widest text-amber-200 font-aug '>
          Personalized baked goods for you and your loved ones. 
        </h1> */}
      </div>

      <div ref={anim3} className='z-10 relative bg-white flex-column md:gap-4 h-[40rem] md:h-[60rem] overflow-hidden lg:mx-auto lg:justify-center lg:flex sm:px-4 md:px-20 lg:px-40 xl:px-[18rem]'>
        <div className='anim3-me rounded-md my-auto px-6 lg:px-0 lg:w-1/3 mx-auto py-12 justify-center '>
          <h1 className='anim3-me font-mont text-2xl text-left md:text-6xl'>Recently Purchased</h1>
          <p className='anim3-me text-black py-4'>We aim to have unique designed cake for all our patrons, so no cakes are built the same</p>
          <Link href='/menu'>
            <button className='anim3-me bg-[#e6ccb2] text-xs md:text-sm mx-auto w-40 h-10 gap-2 md:w-[150px] md:hover:animate-wiggle md:h-14 rounded-full mt-4 text-center flex justify-center items-center' type='button'>See Gallery <AiOutlineArrowRight className='text-lg'/></button>
          </Link> 
        </div>
        <div className='anim3-me px-2 h-1/1 w-full thirdCircle overflow-x-scroll flex items-center gap-4 md:justify-center sm:justify-between '>
          <div className='anim3-me h-[20rem] min-w-[14rem] sm:w-[14rem] md:w-[20rem] md:h-[26rem] rounded-md  bg-white shadow-xl overflow-hidden'>
            <div className='h-[70%] bg-red-200 w-full overflow-hidden'>
              <img className='object-cover object-bottom w-full h-full hover:scale-150 transition duration-1000' src='/images/IMG_9544_jpg.jpg' />
            </div>
            <div className='w-full h-[30%] text-center py-2 bg-white'>
              <h1 className='text-sm md:text-xl pb-0.5 md:py-2 '>
                Dozen Rose Cupcakes
              </h1>
              <p className='text-sm '>
                Lemon base cupcakes with Swiss Meringue Buttercream
              </p>
            </div>
          </div>
          <div className='anim3-me h-[20rem] min-w-[14rem] sm:w-[14rem] md:w-[20rem] md:h-[26rem] rounded-md bg-white shadow-xl overflow-hidden'>
            <div className='h-[70%] w-full overflow-hidden '>
              <img className='object-cover object-bottom w-full h-full hover:scale-150 transition duration-1000 ' src='/images/IMG_4188.jpg' />
            </div>
            <div className='w-full h-[30%] text-center py-2 bg-white'>
              <h1 className=' text-sm md:text-xl pb-0.5 md:py-2'>
                2-Tiered Engagement 
              </h1>
              <p className='text-sm'>
                Classic Vanilla base with vanilla fondant layer
              </p>
            </div>
          </div>
          <div className='anim3-me h-[20rem] min-w-[14rem] sm:w-[14rem] md:w-[20rem] md:h-[26rem] rounded-md bg-white shadow-xl overflow-hidden'>
            <div className='h-[70%] w-full overflow-hidden '>
              <img className='object-cover object-bottom w-full h-full hover:scale-150 transition duration-1000 ' src='/images/IMG_0818_jpg.jpg' />
            </div>
            <div className='w-full h-[30%] py-2 text-center bg-white'>
              <h1 className='text-sm  md:text-xl pb-0.5 md:py-2 '>
                Winnie the Pooh
              </h1>
              <p className='text-sm'>
                Funfetti base with vanilla frosting
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div ref={anim4} className='z-10 relative h-[44rem] md:h-[64rem] w-full grid place-items-center content-center text-center bg-[#e6ccb2] text-white overflow-hidden '>
        <h1 className='anim4-me font-mont text-2xl text-gray-800 mt-10 font-bold text-left md:text-4xl mb-10 md:mb-14'>WORD ON THE STREET</h1>
        <div className='anim4-me text-gray-800 w-[80%] md:w-[60%] md:text-2xl border-2 py-6 px-2 md:p-12 border-amber-200 mb-8 md:mb-10  shadow-lg shadow-amber-200/50'>
          <h3 className='font-semibold mb-2 md:mb-4'>"Every detail is perfect. This is my best birthday cake ever!!"</h3>
          <p>Sally. E</p>
        </div>
        <div className='anim4-me text-gray-800 w-[80%] md:w-[60%] md:text-2xl border-2 py-6 px-2 md:p-12 border-amber-200 mb-8 md:mb-10 shadow-lg shadow-amber-200/50'>
          <h3 className='font-semibold mb-2 md:mb-4'>"CUTEST CAKE EVER! It was so yummy! Go follow her and get your next cake from her! Thank you, Anna!"</h3>
          <p>Monica. J</p>
        </div>
        <div className='anim4-me text-gray-800 w-[80%] md:w-[60%] md:text-2xl border-2 py-6 px-2 md:p-12 border-amber-200 mb-8 md:mb-10 shadow-lg shadow-amber-200/50'>
          <h3 className='font-semibold mb-2 md:mb-4'>"To say I love it, is an understatement because I LOOOOVE everything about this. It's the most beautiful cake I've ever seen. Boy bands forever! Backstreet's Back! Thank you!"</h3>
          <p>C. Rim</p>
        </div>
      </div>
      
      <div className='z-10 relative bg-[url("/images/IMG_9544_jpg.jpg")]  bg-cover my-auto flex-column md:gap-10 h-[20rem] md:h-[60rem]  overflow-hidden mx-auto items-center justify-center flex '>
          <div className='bg-[rgba(0,0,0,0.5)] w-full h-full justify-center items-center flex'>
              <div>
                  <h2 className=' text-white font-semibold tracking-widest text-4xl text-center font-mont w-full lg:text-6xl'>Joy baked into every bite.</h2>
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

export default Landing