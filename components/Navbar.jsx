import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext()
    return (
        <div className='flex justify-between w-full m-0 px-10 py-4'>
            <p className='logo'>
                <Link href='/'>Celeste Cake Shop</Link>
            </p>

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