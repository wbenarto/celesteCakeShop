import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import { useEffect } from 'react'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext()
    const [scroll, setScroll] = useState(true)


    useEffect(() => {

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset

            if (currentScroll > 80) {
                setScroll(false)
            } else {
                setScroll(true)
            }

        })
    }, true)


    return (


        <div className={scroll ? 'fixed top-0 left-0 w-full h-20 flex transition duration-150 ease-in-out text-white justify-center gap-10 md:gap-20 font-hero' : 'transition-all hidden'}>
            <Link href='/'>
                <button className='text-lg md:text-3xl lg:text-4xl '>
                    <p className='font-nav tracking-wider'>home</p>
                </button>
            </Link>
            <Link href='/about'>
                <button className='text-lg md:text-3xl lg:text-4xl'>
                    <p className='font-nav tracking-wider'>flavors</p>
                </button>
            </Link>
            <Link href='/menu/custom'>
                <button className='text-lg md:text-3xl lg:text-4xl'>
                    <p className='font-nav tracking-wider'>ordering</p>
                </button>
            </Link>
            <Link href='/menu'>
                <button className='text-lg md:text-3xl lg:text-4xl'>
                    <p className='font-nav tracking-wider'>shop</p>
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