import React, {useState} from 'react'
import Link from "next/link";

function about() {
    const [size, setSize] = useState(false)
    const [baseFlavor, setBaseFlavor] = useState(false)
    const [layerFlavor, setLayerFlavor] = useState(false)
    const [filling, setFilling] = useState(false)
    return (
        <div className='text-center bg-white pb-16 '>

            <div className='w-full h-[24rem] md:h-[32rem] bg-[url("/images/IMG_9787.jpg")]  bg-center bg-cover md:bg-bottom md:bg-fixed flex justify-center items-center'>
                <div className='bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full'><h1 className='font-aug text-5xl mb-4 text-white font-bold tracking-wide '>Ordering Guide</h1></div>
            </div>
            
            <div className='p-8 font-mont mx-auto bg-white  flex-col justify-center items-center text-sm md:max-w-[900px]  md:text-lg tracking-wider '>
                <div className='py-5 mx-auto'>
                    We are passionate about using the highest quality ingredients to create delectable and distinctive flavors for our cakes and baked goods. Our cakes are hand crafted with layers of cake, buttercream, fruity fillings and falvorful ganaches.
                    <br />
                    <br />

                    We accept custom design cake orders for your special occasion. Orders are pick-up only in Orlando but will be able to deliver within 5 miles radius from the shop. 
                    <br />
                    <br />
                    We require 50% deposit for all custom orders. 
                    <h1 className='font-aug text-5xl py-12 font-black text-gray-600'>How To Order</h1>
                    <p>Send in your design and get a quote for your custom cake order here:</p>

                    <div className='mt-10'>
                    <Link  href="/menu/custom">
                        <button
                            className="bg-red-300 w-24 h-10 md:w-[150px] md:h-14 mx-auto border-2 rounded-md text-center flex justify-center text-white items-center animate-bounce"
                            type="button"
                        >
                            <p>Get a Quote</p>
                        </button>
                    </Link>
                    </div>

                </div>
                
            </div>
            <div onClick={()=>setSize(!size)} className={`max-w-[900px] mx-auto 0 bg-green-100 transition-all duration-1000 font-extrabold cursor-pointer ${size ? ' h-auto py-10  rounded-xl' : 'h-[5rem] py-4 overflow-hidden  rounded-full'}`}>
                <h2 className={`pt-4 pb-4 transition-all duration-1000 text-gray-600 font-black font-display  ${size ? ' text-4xl ' : ' '}`}>CHOOSE CAKE SIZE</h2>
                <div className='flex my-10 max-w-[90%] md:max-w-[70%] mx-auto justify-between gap-1'>
                    <div className='flex-column'>
                        <p className='pb-4 text-xl md:text-2xl'>6 inch</p>
                        <p className='text-xs md:text-sm'>6-8 <br /> 
                        people</p>
                    </div>
                    <div className='flex-column'>
                        <p className='pb-4 text-xl md:text-2xl'>8 inch</p>
                        <p className='text-sm'>10-16 <br />
                        people</p>
                    </div>
                    <div className='flex-column'>
                        <p className='pb-4 text-xl md:text-2xl'>10 inch</p>
                        <p className='text-sm'>18-25 <br />
                        people</p>
                    </div>
                    <div className='flex-column'>
                        <p className='pb-4 text-xl md:text-2xl'>12 inch</p>
                        <p className='text-sm'>30-35 <br />
                        people</p>
                    </div>
                </div>                    
            </div>
            <div onClick={()=>setBaseFlavor(!baseFlavor)} className={`max-w-[900px] mx-auto font-extrabold  transition-all duration-1000 bg-yellow-200 cursor-pointer ${baseFlavor ? ' h-auto py-10 rounded-xl' : 'h-[5rem] py-4 overflow-hidden rounded-full'}`}>
                <h2 className={`transition-all duration-1000 pt-4 pb-4 text-gray-600 font-black font-display ${baseFlavor ? 'text-4xl' : ''}`}>CHOOSE BASE FLAVOR</h2>
                {/* <h1 className='my-8 font-hero text-gray-600 text-lg'>BASE</h1> */}
                <div className='w-full  md:max-w-[900px] mx-auto  grid '>
                    <div className='my-10 px-4  grid'>
                        <h1 className='my-4 text-2xl font-bold text-gray-600'>CLASSIC VANILLA</h1>
                        <p className='text-sm md:text-lg font-serif font-hairline'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid '>
                        <h1  className='my-4 text-2xl font-bold text-gray-600'>CHOCOLATE</h1>
                        <p  className='text-sm md:text-lg font-serif font-hairline'>An exquisite chocolate sponge layered with chocolate meringue (or the option of vanilla) buttercream and thick chocolate sauce, with a rich flavour. With the option of vanilla or chocolate buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl font-bold my- text-gray-600'>RED VELVET</h1>
                        <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl font-bold my- text-gray-600'>FUNFETTI</h1>
                        <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl font-bold my- text-gray-600'>LEMON</h1>
                        <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl font-bold my- text-gray-600'>STRAWBERRY</h1>
                        <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl font-bold my- text-gray-600'>UBE</h1>
                        <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl font-bold my- text-gray-600'>BISCOFF</h1>
                        <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                </div>
                <p></p>
            </div>
            <div onClick={()=>setLayerFlavor(!layerFlavor)} className={`max-w-[900px] mx-auto font-extrabold  transition-all duration-1000 bg-blue-100 cursor-pointer ${layerFlavor ? 'h-auto py-10 rounded-xl' : 'h-[5rem] py-4 overflow-hidden  rounded-full'}`}>
                <h2 className={`pt-4 pb-4 transition-all duration-1000 text-gray-600 font-black font-display  ${layerFlavor ? ' text-4xl' : ''}`}>CHOOSE OUTER LAYER OPTION</h2>
                {/* <h1 className='my-8 font-hero text-gray-600 text-lg'>BASE</h1> */}
                <div className='w-full  md:max-w-[900px] mx-auto  grid '>
                    <div className='my-4 px-4  grid'>
                        <h1 className='my-4 text-2xl font-bold text-gray-600'>OPTION 1: FONDANT LAYER</h1>
                        <p className='text-sm md:text-lg'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
                    </div>
                    <div className='my-4 px-4  grid'>
                        <h1 className='my-4 text-2xl font-bold text-gray-600'>OPTION 2: SWISS MERINGUE BUTTERCREAM</h1>
                    </div>
                    <div className='my-2 px-4  grid'>
                        <h1 className='my-2 text-2xl font-bold text-gray-600'>VANILLA</h1>
                    </div>
                    <div className='my-2 px-4  grid '>
                        <h1  className='my-2 text-2xl font-bold text-gray-600'>CHOCOLATE</h1>
                    </div>
                    <div className='my-2 px-4  grid'>
                        <h1  className='my-2 text-2xl font-bold my- text-gray-600'>STRAWBERRY</h1>
                    </div>
                    <div className='my-2 px-4  grid'>
                        <h1 className='my-2 text-2xl font-bold text-gray-600'>LEMON</h1>
                    </div>
                    <div className='my-2 px-4  grid'>
                        <h1 className='my-2 text-2xl font-bold text-gray-600'>UBE</h1>
                    </div>
                    <div className='my-2 px-4  grid'>
                        <h1 className='my-2 text-2xl font-bold text-gray-600'>BISCOFF</h1>
                    </div>
                    <div className='my-2 px-4  grid'>
                        <h1 className='my-2 text-2xl font-bold text-gray-600'>CREAM CHEESE</h1>
                    </div>
                </div>
                <p></p>
            </div>
            <div onClick={()=>setFilling(!filling)} className={`max-w-[900px] mx-auto font-extrabold transition-all duration-1000 bg-green-200 cursor-pointer ${filling ? 'h-auto py-10 rounded-xl' : 'h-[5rem] py-4 overflow-hidden  rounded-full'}`}>
                <h2 className={`transition-all duration-1000 pt-4 pb-4 text-gray-600 font-black font-display ${filling ? 'text-4xl' : ''}`}>CHOOSE FILLINGS FLAVOR</h2>
                {/* <h1 className='my-8 font-hero text-gray-600 text-lg'>BASE</h1> */}
                <div className='w-full  md:max-w-[900px] mx-auto pt-4 grid '>
                    <h2> (optional)</h2>
                    <h2>Fillings are additional cost </h2>
                    <div className='my-10 px-4  grid'>
                        <h1 className='my-4 text-2xl font-bold text-gray-600'>STRAWBERRY</h1>
                        <p className='text-sm md:text-lg'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid '>
                        <h1  className='my-4 text-2xl font-bold text-gray-600'>RASPBERRY</h1>
                        <p  className='text-sm md:text-lg'>An exquisite dark chocolate sponge layered with chocolate meringue (or the option of vanilla) buttercream and thick chocolate sauce, with a rich flavour. With the option of vanilla or chocolate buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl font-bold my- text-gray-600'>LEMON</h1>
                        <p  className='text-sm md:text-lg'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                    
                </div>
                <p></p>
            </div>
            
  
        </div>
    )
}

export default about
