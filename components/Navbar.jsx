import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import { gsap } from 'gsap/dist/gsap'


const Navbar = () => {
    
    const [scrollDown, setScrollDown] = useState(false)
    const [hamburgerOn, setHamburgerOn] = useState(false)

    let lastScrollTop = 0;

    const handleScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop <= lastScrollTop || scrollTop <= 140) {
            setScrollDown(true);
        } else {
            setScrollDown(false);
        }
        lastScrollTop = scrollTop;
    };
    const { showCart, setShowCart, totalQuantities } = useStateContext()

    useEffect(() => {
        setScrollDown(true);
        window.addEventListener("scroll", handleScroll);
    }, []);

    let t1 = gsap.timeline();

    useEffect(() => {
        gsap.fromTo(".navLink", {

            opacity: 0,
            y: -800,

        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in',
            stagger: .1,
            duration: 1,
        })
    }
        , [])

    useEffect(() => {
        gsap.fromTo('.move', { y: '100%', opacity: 0, zIndex:0 }, { y: 0, duration: .5, delay:0, opacity: 1 ,zIndex:0})
        gsap.fromTo('.movedown', { y: '-100%', opacity: 0, zIndex:0 }, { y: 0, duration: .5, delay: 1, opacity: 1 ,zIndex:0})
    }, [])
    return (
        <>

        <div className={scrollDown ? 
        'fixed z-10 top-0   invisible sm:visible left-0 w-full h-24 bg-[#F48CAA]  flex  justify-center items-center gap-10 lg:gap-24 font-hero duration-500 transition-all' : 
        'fixed z-10 top-0 shadow-xl invisible sm:visible  left-0 w-full h-0 mt-[-100px] flex  justify-center items-center gap-10 lg:gap-24 font-hero duration-500 transition-all'}>
             <Link href='/'>
                <div className=' items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-xs font-bold '>
                        <p className='movedown font-mont md:tracking-widest navLink'>HOME</p>
                    </button>
                </div>
                {/* <div className=' w-24 h-24 items-center flex px-4 mt-2 navLink rounded-full'>
                    <button className='text-xs  font-bold'>
                        <img src='/images/celestewhite.png' /> 
                    </button>
                </div> */}
            </Link>
            <Link href='/about'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-xs  font-bold  '>
                        <p className='movedown font-mont md:tracking-widest navLink'>ABOUT</p>
                    </button>
                </div>
            </Link>
            <Link href='/menu/custom'>
                <div className=' items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-xs font-bold '>
                        <p className='movedown font-mont md:tracking-widest navLink'>CUSTOM CAKES</p>
                    </button>
                </div>
            </Link>
           
            <Link href='/menu'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-xs  font-bold'>
                        <p className='movedown font-mont md:tracking-widest navLink'>GALLERY</p>
                    </button>
                </div>
            </Link>
            <Link href='/contact'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-xs   font-bold'>
                        <p className='movedown font-mont text-xs md:tracking-widest navLink'>CONTACT</p>
                    </button>
                </div>
            </Link>
{/*             
            <div className='md:absolute flex  my-auto   md:right-0 md:mr-4 navLink'>
                <button type=''
                    className='move my-auto'
                    onClick={() => setShowCart(!showCart)}>

                    <span className='absolute text-xs mt-[-8px] text-green-300  w-4 h-4  rounded-full text-center font-bold'>{totalQuantities > 0 ? totalQuantities : '0'}</span>
                    <AiOutlineShopping className='md:text-3xl '/>
                </button>
            </div> */}


            {showCart && <Cart />}
        </div>

        <div className='sm:invisible bg-[rgba(0,0,0,0.1)] fixed z-999 top-0 h-14 w-full flex items-center px-8 justify-between'>

                <Link href='/'>
                    <h1 className={hamburgerOn ? 'movedown invert text-base font-hero tracking-widest text-white duration-300 transition all' :  'movedown  text-base font-hero tracking-widest text-white duration-500 transition-all'}>CELESTE</h1>
                </Link>
                <div className={hamburgerOn ? 'movedown text-xl text-white invert' : 'movedown text-xl text-white' } onClick={() => setHamburgerOn(!hamburgerOn)}><GiHamburgerMenu /></div>
        </div>
        
        {hamburgerOn ? (
            <div className='fixed top-0 mt-0 h-[24rem] w-full transition-all duration-500 bg-red-100 text-white z-10'>
                
                <div className='sm:invisible fixed z-999 top-0 h-14 w-full flex items-center px-8 justify-between'>

                    <Link href='/'>
                        <h1 className={hamburgerOn ? 'movedown invert text-base font-hero tracking-widest text-white duration-300 transition all' :  'movedown  text-base font-hero tracking-widest text-white duration-500 transition-all'}>CELESTE</h1>
                    </Link>
                    <div className={hamburgerOn ? 'movedown text-xl text-white invert' : 'movedown text-xl text-white' } onClick={() => setHamburgerOn(!hamburgerOn)}><GiHamburgerMenu /></div>
                </div>
                <div className='py-20 px-10 '>
                
                    <Link href='/about'>
                        <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                            <button onClick={()=>setHamburgerOn(false)} className='text-base text-black font-bold  '>
                                <p className='move font-body tracking-widest navLink'>ABOUT</p>
                            </button>
                        </div>
                    </Link>
                    <Link href='/menu/custom' >
                        <div className=' items-center flex px-4 py-4 h-10 navLink rounded-full'>
                            <button onClick={()=>setHamburgerOn(false)} className='text-base text-black font-bold '>
                                <p className='move font-body tracking-widest navLink'>CUSTOM CAKES</p>
                            </button>
                        </div>
                    </Link>
                    <Link href='/menu'>
                        <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                            <button onClick={()=> setHamburgerOn(false)} className='text-base text-black font-bold'>
                                <p className='move font-body tracking-widest navLink'>GALLERY</p>
                            </button>
                        </div>
                    </Link>
                    <Link href='/contact'>
                        <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                            <button onClick={()=> setHamburgerOn(false)} className='text-base text-black font-bold'>
                                <p className='move font-body tracking-widest navLink'>CONTACT</p>
                            </button>
                        </div>
                    </Link>
                    {/* <div className='flex px-4 py-4 my-auto  navLink'>
                        <button type=''
                            className='move my-auto'
                            onClick={() => setShowCart(!showCart)}>
                            <span className='absolute text-base mt-[-8px] text-green-400  w-4 h-4  rounded-full text-center font-bold'>{totalQuantities > 0 ? totalQuantities : '0'}</span>
                            <AiOutlineShopping className='text-black text-3xl md:text-3xl '/>
                        </button>
                    </div> */}
            </div>
            {/* {showCart && <Cart showCart={showCart}/>} */}
       
            </div>
        ) : (
            <div className='absolute top-0 h-0 transition-all duration-500'>
              
            </div>
        )}
        </>

    )
}

export default Navbar