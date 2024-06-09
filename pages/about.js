import React, {useState} from 'react'
import Link from "next/link";
import {AiOutlineArrowRight} from 'react-icons/ai'

function about() {
  
    return (
        <div className='text-center bg-white pb-16 '>

            <div className='w-full h-[24rem] md:h-[32rem] bg-[url("/images/IMG_9787.jpg")]  bg-center bg-cover md:bg-bottom md:bg-fixed flex justify-center items-center'>
                <div className='bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full'><h1 className='font-aug text-5xl mb-4 text-white font-bold tracking-wide '>About Us</h1></div>
            </div>
            
            <div className='p-8 font-mont mx-auto bg-white  flex-col justify-center items-center text-sm md:max-w-[900px]  md:text-lg tracking-wider '>
                <h1 className='font-aug text-5xl py-12 text-center font-black text-gray-600'>Hello. Kumusta.</h1>
                <img src='/images/tina.jpg'></img>
                <br />
                <p>My name is Anna. Growing up, baking was never a hobby of mine. I started baking during the time that my husband and I are planning for our daughter’s 1st birthday, thinking that I could make the cake and cupcakes for her birthday. But of course my cake and cupcake did not come out right. I am completely self-taught, I practiced and was able to make her 2nd birthday cake. Since then it has been my goal to always make her birthday cake every year. Friends and families then noticed and they started to request for cakes, and the rest is history. 
               </p>
               <br />
               <p> Céleste Cakeshop started when my family and I moved to Seattle in 2017. That’s where I completely let go and let the creativity arise. It has been an amazing journey, I have learned and gained a lot of experience. And I’m very excited to now be serving the Orlando area.
                I am passionate about using the highest quality ingredients to create delectable and distinctive flavors for our cakes and baked goods. Our cakes are hand crafted with layers of cake, fruity fillings, buttercream and flavorful ganaches. 
                </p> 
                <br />
                <p>
                With your custom cake, I love to artfully incorporate personal touches --- favorite hobby, color, yours or your child's favorite character, a shared memory. It will be customized to how you like it, turning your vision into not only a dessert but a tangible expression of love, celebration, and happiness. A cake/dessert that will not only satisfy your sweet cravings but will also leave a lasting impression to savor the creations I crafted with my own hands and heart. 
                </p>
            </div>
           
            
  
        </div>
    )
}

export default about
