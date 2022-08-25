import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext()
    return (
        <div className='flex items-center justify-between h-20  w-full m-0 px-10 '>
            <Link href='/menu'>
                <div>
                    <p className='text-gray-500  font-body font-bold  mx-auto hover:cursor-pointer'>
                        Store
                    </p>
                </div>

            </Link>
            <Link href='/'>
                <button className=''>
                    <img src='/images/celeste4.png' className='w-20 h-20'></img>
                </button>

                {/* <p className='text-gray-500 font-bold hover:cursor-pointer'>
                    C

                </p> */}
            </Link>



            <div className=' h-full my-auto '>
                <button type='button'
                    className='text-3xl cursor-pointer  '
                    onClick={() => setShowCart(true)}>

                    <span className='text-sm ml-4  w-4 h-4 rounded-full text-center font-bold'>{totalQuantities}</span>
                    <AiOutlineShopping />
                </button>
            </div>


            {showCart && <Cart />}
        </div>
    )
}

export default Navbar