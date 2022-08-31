import React from 'react'

function about() {
    return (
        <div className='text-center  '>

            <div className='w-full h-[24rem] md:h-[32rem] bg-[url("/images/IMG_9787.jpg")]  bg-center bg-cover md:bg-bottom md:bg-fixed flex justify-center items-center'>
                <div className='bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full'><h1 className='font-aug text-5xl mb-4 text-white font-bold tracking-wide '>Flavors </h1></div>
            </div>
            
            <div className='px-8 font-mont mx-auto bg-white h-[14rem] flex justify-center items-center text-sm md:text-lg tracking-wider '>
                <div className='md:max-w-[900px]'>
                We are passionate about using the highest quality ingredients to create delectable and distinctive flavors for our cakes and baked goods. Our cakes are hand crafted with layers of cake, buttercream, fruity fillings and falvorful ganaches.
                </div>
            </div>
            <div className='h-auto py-10'>
                {/* <h1 className='my-8 font-hero text-gray-600 text-lg md:text-4xl'>BASE</h1> */}
                <div className='w-full  md:max-w-[900px] mx-auto  grid '>
                    <div className='my-10 px-4  grid'>
                        <h1 className='my-4 text-2xl md:text-4xl font-bold text-gray-600'>CLASSIC VANILLA</h1>
                        <p className='text-sm md:text-lg'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid '>
                        <h1  className='my-4 text-2xl md:text-4xl font-bold text-gray-600'>DARK CHOCOLATE</h1>
                        <p  className='text-sm md:text-lg'>An exquisite dark chocolate sponge layered with chocolate meringue (or the option of vanilla) buttercream and thick chocolate sauce, with a rich flavour. With the option of vanilla or chocolate buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl md:text-4xl font-bold my- text-gray-600'>MOCHA DELIGHT</h1>
                        <p  className='text-sm md:text-lg'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                </div>
                <p></p>
            </div>
            <div className='h-auto bg-white py-10'>
                {/* <h1 className='my-8 font-hero text-gray-600 text-lg md:text-4xl'>BASE</h1> */}
                <div className='w-full  md:max-w-[900px] mx-auto  grid '>
                    <div className='my-10 px-4  grid'>
                        <h1 className='my-4 text-2xl md:text-4xl font-bold text-gray-600'>SALTED CARAMEL FROSTING</h1>
                        <p className='text-sm md:text-lg'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid '>
                        <h1  className='my-4 text-2xl md:text-4xl font-bold text-gray-600'>RED VELVET FONDANT</h1>
                        <p  className='text-sm md:text-lg'>An exquisite dark chocolate sponge layered with chocolate meringue (or the option of vanilla) buttercream and thick chocolate sauce, with a rich flavour. With the option of vanilla or chocolate buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl md:text-4xl font-bold my- text-gray-600'>LEMON CHEESE LAYER</h1>
                        <p  className='text-sm md:text-lg'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                </div>
                <p></p>
            </div>
  
        </div>
    )
}

export default about
