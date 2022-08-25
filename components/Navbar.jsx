import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext()
    return (


        <div className='relative w-full h-20 pt-20 flex text-white justify-center gap-10 md:gap-20 font-hero'>
            <button className='font-hero'>
                <p className='font-nav text-sm tracking-wide'>about</p>
            </button>
            <button className=''>
                <p className='font-nav text-sm tracking-wide'>flavors</p>
            </button>
            <button className=''>
                <p className='font-nav text-sm tracking-wide'>ordering</p>
            </button>
            <button className=''>
                <p className='font-nav text-sm tracking-wide'>shop</p>
            </button>

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