import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import logo from '../public/images/celeste.png'
import { GiHamburgerMenu } from 'react-icons/gi'
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


    useEffect(() => {
        gsap.fromTo('.move', { y: '100%', opacity: 0, zIndex:0 }, { y: 0, duration: .5, delay:1, opacity: 1 ,zIndex:0})
        gsap.fromTo('.movedown', { y: '-60%', opacity: 0, zIndex:0 }, { y: 0, duration: .5, delay: 1, opacity: 1 ,zIndex:0})
    }, [])
    return (
        <div className="flex justify-center">

        <div className={scrollDown ? 
        'fixed top-0 z-40  invisible rounded-b-full w-3/4 md:visible h-24 bg-white flex justify-center items-center gap-14 xlg:gap-32 font-hero duration-500 transition-all' : 
        'fixed z-40 top-0 shadow-xl w-full invisible md:visible mx-auto h-0 mt-[-150px] flex  justify-center items-center gap-10 lg:gap-24 font-hero duration-500 transition-all'}>
            {/* <Link href='/'>
                <div className=' items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className=' font-semibold text-[#22333b] hover:text-white'>
                        <p className='movedown font-mont md:tracking-widest navLink'>HOME</p>
                    </button>
                </div>
            </Link> */}
            <Link href='/about'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='  font-semibold text-[#22333b] hover:text-[#e6ccb2]'>
                        <p className='movedown font-mont md:tracking-widest navLink'>ABOUT</p>
                    </button>
                </div>
            </Link>
            <Link href='/menu/custom'>
                <div className=' items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className=' font-semibold text-[#22333b] hover:text-[#e6ccb2] '>
                        <p className='movedown font-mont md:tracking-widest navLink'>ORDER</p>
                    </button>
                </div>
            </Link>
            <Link href='/'>
                <div className='flex mt-20 p-1 navLink justify-center items-center w-44 h-44 bg-white rounded-full hover:cursor-pointer'>
                    <img className='navLink' src={logo.src} alt='logo'/>
                </div>
            </Link>

           
            <Link href='/menu'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='  font-semibold text-[#22333b] hover:text-[#e6ccb2]'>
                        <p className='movedown font-mont md:tracking-widest navLink'>GALLERY</p>
                    </button>
                </div>
            </Link>
            <Link href='/contact'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className=' font-semibold text-[#22333b] hover:text-[#e6ccb2]'>
                        <p className='movedown font-mont md:tracking-widest navLink'>CONTACT</p>
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


            {/* {showCart && <Cart />} */}
        </div>

        <div className='md:invisible bg-[#e6ccb2] fixed z-10 top-0 h-14 w-full flex items-center px-8 justify-between'>

                <Link href='/'>
                    <h1 className='movedown text-base font-semibold font-mont tracking-widests duration-300 transition all' >CELESTE</h1>
                </Link>
                <div className='movedown text-xl' onClick={() => setHamburgerOn(!hamburgerOn)}><GiHamburgerMenu /></div>
        </div>
        
        {hamburgerOn ? (
            <div className='fixed top-0 mt-0 h-[24rem] w-full transition-all duration-200 bg-[#e6ccb2] font-semibold text-black z-10'>
                
                <div className='sm:invisible fixed z-999 top-0 h-14 w-full flex items-center px-8 justify-between'>

                    <Link href='/'>
                        <h1 className='movedown  text-base font-mont tracking-widest text-black duration-300 transition all'>CELESTE</h1>
                    </Link>
                    <div className='movedown text-xl text-black' onClick={() => setHamburgerOn(!hamburgerOn)}><GiHamburgerMenu /></div>
                </div>
                <div className='py-20 px-10'>
                
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
                                <p className='move font-body tracking-widest navLink'>ORDER</p>
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
                            <AiOutlineShopping className='text-white text-3xl md:text-3xl '/>
                        </button>
                    </div> */}
            </div>
            {/* {showCart && <Cart showCart={showCart}/>} */}
       
            </div>
        ) : (
            <div className='absolute top-0 h-0 transition-all duration-500'>
              
            </div>
        )}
        </div>

    )
}

export default Navbar