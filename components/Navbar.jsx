import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import { useEffect } from 'react'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext()
    const [scrollDown, setScrollDown] = useState(false)

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

    useEffect(() => {
        setScrollDown(true);
        window.addEventListener("scroll", handleScroll);
    }, []);


    return (


        <div className={scrollDown ? 'absolute top-0 left-0 w-full h-20 flex duration-200 ease-in bg-[rgba(0,0,0,0.1)] text-white justify-center gap-10 md:gap-20 font-hero' : 'translate-y-[-150%] duration-200 ease-out invisible'}>
            <Link href='/'>
                <button className='text-sm md:text-lg'>
                    <p className='font-body tracking-wider'>HOME</p>
                </button>
            </Link>
            <Link href='/about'>
                <button className='text-sm md:text-lg '>
                    <p className='font-body tracking-wider'>FLAVORS</p>
                </button>
            </Link>
            <Link href='/menu/custom'>
                <button className='text-sm md:text-lg'>
                    <p className='font-body tracking-wider'>ORDER</p>
                </button>
            </Link>
            <Link href='/menu'>
                <button className='text-sm md:text-lg'>
                    <p className='font-body tracking-wider'>SHOP</p>
                </button>
            </Link>


            {/* <Link href='/menu'>
                <div>
                    <p className='text-gray-500 font-bold font-nav  mx-auto hover:cursor-pointer'>
                        Store
                    </p>
                </div>

            </Link>
            <Link href='/'>
                <button className=''>
                    <img src='/images/celeste4.png' className='w-20 h-20'></img>
                </button>

                <p className='text-gray-500 font-bold hover:cursor-pointer'>
                    C

                </p>
            </Link> */}


            {/* 
            <div className=' h-full my-auto '>
                <button type='button'
                    className='text-3xl cursor-pointer  '
                    onClick={() => setShowCart(true)}>

                    <span className='text-sm ml-4  w-4 h-4 rounded-full text-center font-bold'>{totalQuantities}</span>
                    <AiOutlineShopping />
                </button>
            </div> */}


            {showCart && <Cart />}
        </div>

    )
}

export default Navbar