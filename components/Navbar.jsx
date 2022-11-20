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


        <div className='fixed z-999 top-0 left-0 w-full h-20 flex  text-white justify-center items-center  md:gap-20 font-hero'>
            <Link href='/'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-xs text-white  font-bold'>
                        <p className='font-body tracking-wider navLink'>HOME</p>
                    </button>
                </div>

            </Link>
            <Link href='/about'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-xs text-white font-bold  '>
                        <p className='font-body tracking-wider navLink'>HOW TO</p>
                    </button>
                </div>
            </Link>
            <Link href='/menu/custom'>
                <div className=' items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-xs text-white font-bold '>
                        <p className='font-body tracking-wider navLink'>CUSTOM ORDER</p>
                    </button>
                </div>
            </Link>
            <Link href='/menu'>
                <div className='items-center flex px-4 py-4 h-10 navLink rounded-full'>
                    <button className='text-xs text-white font-bold'>
                        <p className='font-body tracking-wider navLink'>SHOP</p>
                    </button>
                </div>
            </Link>
            
            <div className='md:absolute flex  my-auto   md:right-0 md:mr-4 navLink'>
                <button type=''
                    className='my-auto'
                    onClick={() => setShowCart(true)}>

                    <span className='absolute text-xs mt-[-8px] text-green-300  w-4 h-4  rounded-full text-center font-bold'>{totalQuantities > 0 ? totalQuantities : '0'}</span>
                    <AiOutlineShopping className='md:text-3xl '/>
                </button>
            </div>


            {showCart && <Cart />}
        </div>

    )
}

export default Navbar