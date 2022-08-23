import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext()
    return (
        <div className='flex  w-full m-0 px-10 py-4'>
            <Link href='/'>
                <p className='text-gray-500 font-bold'>
                    C

                </p>
            </Link>

            <Link href='/menu'>
                <p className='text-gray-500 font-body font-bold self-center mx-auto'>
                    MENU
                </p>
            </Link>


            <button type='button'
                className='cart-icon'
                onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty top-0'>{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
        </div>
    )
}

export default Navbar