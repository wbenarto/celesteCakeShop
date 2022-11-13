import React from 'react'

function about() {
    return (
        <div className='text-center  '>

            <div className='w-full h-[24rem] md:h-[32rem] bg-[url("/images/IMG_9787.jpg")]  bg-center bg-cover md:bg-bottom md:bg-fixed flex justify-center items-center'>
                <div className='bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full'><h1 className='font-aug text-5xl mb-4 text-white font-bold tracking-wide '>Ordering Guide</h1></div>
            </div>
            
            <div className='p-8 font-mont mx-auto bg-white  flex-col justify-center items-center text-sm md:text-lg tracking-wider '>
                <div className='md:max-w-[900px] pt-20'>
                    We are passionate about using the highest quality ingredients to create delectable and distinctive flavors for our cakes and baked goods. Our cakes are hand crafted with layers of cake, buttercream, fruity fillings and falvorful ganaches.
                </div>
                <div className='md:max-w-[900px] py-20'>
                    <h1 className='text-[2rem]'>How To Order</h1>

                    <h2 className='pt-10 pb-5'>Our Sizes:</h2>
                    <div className='flex md:max-w-[70%] mx-auto justify-between gap-1'>
                        <div className='flex-column'>
                            <p className='pb-4 text-xl md:text-2xl'>6 inch</p>
                            <p className='text-xs md:text-sm'>feeds 6-8 <br /> 
                            people</p>
                        </div>
                        <div className='flex-column'>
                            <p className='pb-4 text-xl md:text-2xl'>8 inch</p>
                            <p className='text-sm'>feeds 10-16 <br />
                            people</p>
                        </div>
                        <div className='flex-column'>
                            <p className='pb-4 text-xl md:text-2xl'>10 inch</p>
                            <p className='text-sm'>feeds 18-25 <br />
                            people</p>
                        </div>
                        <div className='flex-column'>
                            <p className='pb-4 text-xl md:text-2xl'>12 inch</p>
                            <p className='text-sm'>feeds 30-35 <br />
                            people</p>
                        </div>
                    </div>


                    
                </div>
            </div>
            <div className='h-auto py-10'>
                <h2 className='pt-4 pb-4'>Pick Base Flavor:</h2>
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
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl md:text-4xl font-bold my- text-gray-600'>MOCHA DELIGHT</h1>
                        <p  className='text-sm md:text-lg'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl md:text-4xl font-bold my- text-gray-600'>MOCHA DELIGHT</h1>
                        <p  className='text-sm md:text-lg'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl md:text-4xl font-bold my- text-gray-600'>MOCHA DELIGHT</h1>
                        <p  className='text-sm md:text-lg'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl md:text-4xl font-bold my- text-gray-600'>MOCHA DELIGHT</h1>
                        <p  className='text-sm md:text-lg'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1  className='my-4 text-2xl md:text-4xl font-bold my- text-gray-600'>MOCHA DELIGHT</h1>
                        <p  className='text-sm md:text-lg'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p>
                    </div>
                </div>
                <p></p>
            </div>
            <div className='h-auto bg-white py-10'>
                <h2 className='pt-4 pb-4'>Pick Layer Option:</h2>
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
                    <div className='my-10 px-4  grid'>
                        <h1 className='my-4 text-2xl md:text-4xl font-bold text-gray-600'>SALTED CARAMEL FROSTING</h1>
                        <p className='text-sm md:text-lg'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1 className='my-4 text-2xl md:text-4xl font-bold text-gray-600'>SALTED CARAMEL FROSTING</h1>
                        <p className='text-sm md:text-lg'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1 className='my-4 text-2xl md:text-4xl font-bold text-gray-600'>SALTED CARAMEL FROSTING</h1>
                        <p className='text-sm md:text-lg'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1 className='my-4 text-2xl md:text-4xl font-bold text-gray-600'>SALTED CARAMEL FROSTING</h1>
                        <p className='text-sm md:text-lg'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1 className='my-4 text-2xl md:text-4xl font-bold text-gray-600'>SALTED CARAMEL FROSTING</h1>
                        <p className='text-sm md:text-lg'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
                    </div>
                    <div className='my-10 px-4  grid'>
                        <h1 className='my-4 text-2xl md:text-4xl font-bold text-gray-600'>SALTED CARAMEL FROSTING</h1>
                        <p className='text-sm md:text-lg'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
                    </div>
                </div>
                <p></p>
            </div>
            <div className='h-auto py-10'>
                {/* <h1 className='my-8 font-hero text-gray-600 text-lg md:text-4xl'>BASE</h1> */}
                <div className='w-full  md:max-w-[900px] mx-auto  grid '>
                    <div className='my-10 px-4  grid'>
                        <h1 className='my-4 text-2xl md:text-4xl font-bold text-gray-600'>FONDANT</h1>
                        <p className='text-sm md:text-lg'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p>
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
