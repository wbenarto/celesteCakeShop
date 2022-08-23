import React from 'react'
import Link from 'next/link'

const menu = () => {
  return (
    <>
        <div className=' bg-gray-300 flex-column  text-center content-center'>
            <p className='py-4 text-xl'>Custom Design Your Cake</p>
            
            <div className='h-10 w-24 bg-red-300 grid mx-auto justify-center items-center '><p>Shop Here</p></div>
        </div>
        <div className=' bg-gray-200 h-[300px] flex-column  text-center content-center'>
            <p className='py-4 text-xl'>Cakes</p>
            <Link href={`/menu/cakes`}>
                <div className='h-10 w-24 bg-red-300 grid mx-auto justify-center items-center '><p>Shop Here</p></div>
            </Link>
            
        </div>
        <div className=' bg-gray-400 h-[300px] flex-column  text-center content-center'>
            <p className='py-4 text-xl'>Cupcakes</p>
            <Link href={`/menu/cupcakes`}>
                <div className='h-10 w-24 bg-red-300 grid mx-auto justify-center items-center '><p>Shop Here</p></div>
            </Link>
            
        </div>
        <div className=' bg-gray-200 h-[300px] flex-column  text-center content-center'>
            <p className='py-4 text-xl'>Cookies</p>
            <Link href={`/menu/cookies`}>
                <div className='h-10 w-24 bg-red-300 grid mx-auto justify-center items-center '><p>Shop Here</p></div>
            </Link>
           
        </div>
    </>
    
       

  )
}

export default menu