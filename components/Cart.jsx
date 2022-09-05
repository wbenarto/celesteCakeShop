import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
    console.log(cartItems)

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        if (response.statusCode === 500) return;

        const data = await response.json();

        toast.loading('Redirecting...');

        stripe.redirectToCheckout({ sessionId: data.id });
    }

    return (
        <div className="absolute  right-0 w-[14rem] sm:w-[24rem] h-full" ref={cartRef}>
            <div className="h-screen w-full float-right bg-gray-800">
                <button
                    type="button"
                    className="flex h-10  w-full items-center"
                    onClick={() => setShowCart(false)}>
                    <AiOutlineLeft className='text-xl ml-2'/>
                    <span className="px-4">Your Cart</span>
                    <span className="">({totalQuantities} items)</span>
                </button>

                {cartItems.length < 1 && (
                    <div className="text-center  ">
                        <AiOutlineShopping size={150} className='mx-auto' />
                        <h3>Your shopping bag is empty</h3>
               
                    </div>
                )}

                <div className="w-full  overflow-hidden ">
                    {cartItems.length >= 1 && cartItems.map((item) => (
                        <div className="w-full flex px-4 my-2 " key={item._id}>
                            <img src={urlFor(item?.image[0])} className="h-14 md:h-24 my-auto" />
                            <div className="flex w-full justify-between items-center">
                                <div className="text-xs">
                                    <p className='md:text-xl px-2 md:px-4'>{item.name}</p>
                                    <p className='md:text-lg px-2 md:px-4'>${item.price}</p>
                                    <p className='md:text-lg px-2 md:px-4'>Base: {item.base}</p>
                                    <p className='md:text-lg px-2 md:px-4'>Fondant: {item.fondant}</p>
                                    <p className='md:text-lg px-2 md:px-4'>Message: {item.message}</p>
                                </div>
                                <div className="">
                                    <button
                                        type="button"
                                        className="text-red-500 text-2xl"
                                        onClick={() => onRemove(item)}
                                    >
                                        <TiDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className="p-4 ">
                        <div className="flex w-full items-center border-b-2 border-gray-600 justify-between">
                            <h3>Subtotal:</h3>
                            <h3 className='text-2xl md:text-3xl'>${totalPrice}</h3>
                        </div>
                        <div className="text-center bg-green-400 h-10 items-center grid my-4 rounded-lg ">
                            <button type="button" className="text-sm text-gray-600 font-bold tracking-wide" onClick={handleCheckout}>
                                Pay with Stripe
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart