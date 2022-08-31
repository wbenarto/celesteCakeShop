import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import { gsap } from 'gsap/dist/gsap'


const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext()

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


    return (


        <div className='fixed top-0 left-0 w-full h-20 flex  text-white justify-center items-center gap-3 md:gap-20 font-hero'>
            <Link href='/'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-sm text-white  font-bold'>
                        <p className='font-body tracking-wider navLink'>HOME</p>
                    </button>
                </div>

            </Link>
            <Link href='/about'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-sm text-white font-bold  '>
                        <p className='font-body tracking-wider navLink'>FLAVORS</p>
                    </button>
                </div>
            </Link>
            <Link href='/menu/custom'>
                <div className=' items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-sm text-white font-bold '>
                        <p className='font-body tracking-wider navLink'>ORDER</p>
                    </button>
                </div>
            </Link>
            <Link href='/menu'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-sm text-white font-bold'>
                        <p className='font-body tracking-wider navLink'>SHOP</p>
                    </button>
                </div>
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