import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-hot-toast";
import {AiOutlineArrowRight} from 'react-icons/ai'
import Dropdown from '../../components/Dropdown'

const Custom = () => {
  const [base64, setBase64] = useState(null)
  const router = useRouter();
  const baseOptions = [
    "Classic Vanilla", 
    "Chocolate",
    "White Chocolate", 
    "Red Velvet w/ Cream Cheese", 
    "Funfetti", 
    "Lemon", 
    "Strawberry", 
    "Ube", 
    "Biscoff"
  ];
  const sizeOptions = ["6 inch", "8 inch", "10 inch", "12 inch"];
  const fondantOptions = [
    "Fondant Layer - Vanilla",
    "Swiss Meringue Buttercream - Vanilla",
    "Swiss Meringue Buttercream - Chocolate",
    "Swiss Meringue Buttercream - Strawberry",
    "Swiss Meringue Buttercream - Lemon",
    "Swiss Meringue Buttercream - Ube",
    "Swiss Meringue Buttercream - Biscoff",
    "Swiss Meringue Buttercream - Cream Cheese"
  ];
  const fillingOptions = [
    "None",
    "Strawberry",
    "Raspberry",
    "Lemon Curd",
    "White Chocolate",
    "Milk or Dark Chocolate Ganache"
  ];
  const [size, setSize] = useState(false)
  const [baseFlavor, setBaseFlavor] = useState(false)
  const [layerFlavor, setLayerFlavor] = useState(false)
  const [filling, setFilling] = useState(false)


  const handleSelection = (e, title) => {
    if (title == "Size") {
      setSize(e);
    } else if (title == "Base") {
      setBase(e);
    } else if (title == "Fondant / Buttercream") {
      setFondant(e);
    } else if (title == 'Filling') {
      setFilling(e)
    }
  };


  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      
      formData[field.name] = field.value;
      if (field == 'phone') {
        formData[field.name] = Number(field.value)
      }
      // if (field.name == 'imageFile') {
      //   formData[field.name] = base64
      // }
      
    });
   

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      console.log(await res.json())
      toast.success("Thank you for your inquiry! We will get back to you ASAP.");
      router.push("/menu");
    } catch (err) {
      console.log(err);
    }
  }

    
  return (
    <div className="grid bg-white  w-full mx-auto">
      <div className='w-full h-[24rem] md:h-[32rem] bg-[url("/images/IMG_4188.jpg")]  bg-bottom md:bg-center md:bg-fixed bg-cover flex justify-center items-center'>
        <div className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full">
          <h1 className="font-aug text-5xl mb-4 text-white font-bold tracking-wide ">
            Cake Design{" "}
          </h1>
        </div>
      </div>

      <div className="px-4  w-full md:w-[900px] mx-auto ">
        <div className='p-8 font-mont mx-auto bg-white  flex-col justify-center items-center text-sm md:max-w-[900px]  md:text-lg tracking-wider '>
                <div className='py-5 mx-auto text-center'>
                    <h1 className='font-aug text-5xl py-12 text-center font-black text-gray-600'>How To Order</h1>
                    We are passionate about using the highest quality ingredients to create delectable and distinctive flavors for our cakes and baked goods. Our cakes are hand crafted with layers of cake, buttercream, fruity fillings and falvorful ganaches.
                    <br />
                    <br />

                    We accept custom design cake orders for your special occasion. Orders are pick-up only in Orlando but will be able to deliver within 5 miles radius from the shop. Delivery fee is calculated depending on the distance. 
                    <br />
                    <br />
                    We require 50% deposit for all custom orders. Remaining balance is due 72 hours before Pick up / Delivery.

                    <p>A $25 rush fee is added to your total fee if placed in less than 2 weeks before your event. </p>
                    <br />
                    Please allow minimum 2 weeks to place a custom order.
                    <br />
                    <br />
                   
                    <p className='font-bold'>Sculpted cake prices depend on their complexity. Sculpted cakes are covered in Fondant or Modeling Chocolate. Prices will be discussed after the design has been finalized.</p>
                    <br />
                    <p>1 tier cakes (serves 6-8 people) : starts at $120 </p>
                    <p>2 tier cakes (serves 35-50 people) : starts at $250</p>
                    <p>3 tier cakes (serves 75-100 people) : starts at $350</p>
                 
                    <br />
                    <p className='font-bold'>Cupcakes:</p> 
                    <br />
                    Standard: $45/dozen 
                    <br/>
                    Standard w/ Fondant Toppers: $63-$73/dozen (depending on complexity of topper)
                    <br />
                    <br />
                    ***Additional fees apply for cupcakes w/ Fillings***
                    <br />
                    <br />
                    Please note that photos that are sent are ONLY used as inspiration, I will NOT completely imitate other artists' work.
                    <br />
                    <br />
                    PLEASE LET US KNOW IF YOU DO NOT SEE THE FLAVOR THAT YOU ARE LOOKING FOR. SOME FLAVOR MAY BE AVAILABLE UPON REQUEST. CURRENTLY NOT AVAILABLE IN GLUTEN FREE OR VEGAN.  
                    <br />
                    <br />
 
                    <div onClick={()=>setSize(!size)} className={`max-w-[900px] mx-auto 0 bg-[#e6ccb2] transition-all duration-1000 font-extrabold cursor-pointer ${size ? ' h-auto py-10  rounded-xl' : 'h-[5rem] py-4 overflow-hidden  rounded-full'}`}>
                      <h2 className={`pt-4 pb-4 transition-all duration-1000 text-gray-800 font-black font-display  ${size ? ' text-4xl ' : ' '}`}>CHOOSE CAKE SIZE</h2>
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
                  <div onClick={()=>setBaseFlavor(!baseFlavor)} className={`max-w-[900px] mx-auto font-extrabold  transition-all duration-1000 bg-[#e6ccb2] cursor-pointer ${baseFlavor ? ' h-auto py-10 rounded-xl' : 'h-[5rem] py-4 overflow-hidden rounded-full'}`}>
                      <h2 className={`transition-all duration-1000 pt-4 pb-4 text-gray-800 font-black font-display ${baseFlavor ? 'text-4xl' : ''}`}>CHOOSE BASE FLAVOR</h2>
                      {/* <h1 className='my-8 font-hero text-gray-600 text-lg'>BASE</h1> */}
                      <div className='w-full  md:max-w-[900px] mx-auto  grid '>
                        <div className='my-4 px-2  flex justify-center'>
                              <p className='text-red-800 mx-2'>new!</p><h1 className=' text-2xl font-bold text-gray-600'>CALAMANSI</h1>
                              {/* <p className='text-sm md:text-lg font-serif font-hairline'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p> */}
                          </div>
                          <div className='my-4 px-2  flex justify-center'>
                              <p className='text-red-800 mx-2'>new!</p><h1 className=' text-2xl font-bold text-gray-600'>PANDAN</h1>
                              {/* <p className='text-sm md:text-lg font-serif font-hairline'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p> */}
                          </div>
                          <div className='my-4 px-2  flex justify-center'>
                              <p className='text-red-800 mx-2'>new!</p><h1 className=' text-2xl font-bold text-gray-600'>CARROT CAKE</h1>
                              {/* <p className='text-sm md:text-lg font-serif font-hairline'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p> */}
                          </div>
                          <div className='my-4 px-2  grid'>
                              <h1 className=' text-2xl font-bold text-gray-600'>CLASSIC VANILLA</h1>
                              {/* <p className='text-sm md:text-lg font-serif font-hairline'>Vanilla infused cake layered with wild homemade strawberry or raspberry preserve and finished with a delicate vanilla buttercream</p> */}
                          </div>
                          <div className='my-4 px-2  grid '>
                              <h1  className=' text-2xl font-bold text-gray-600'>CHOCOLATE</h1>
                              {/* <p  className='text-sm md:text-lg font-serif font-hairline'>An exquisite chocolate sponge layered with chocolate meringue (or the option of vanilla) buttercream and thick chocolate sauce, with a rich flavour. With the option of vanilla or chocolate buttercream</p> */}
                          </div>
                          <div className='my-4 px-2  grid '>
                              <h1  className=' text-2xl font-bold text-gray-600'>WHITE CHOCOLATE</h1>
                              {/* <p  className='text-sm md:text-lg font-serif font-hairline'>An exquisite chocolate sponge layered with chocolate meringue (or the option of vanilla) buttercream and thick chocolate sauce, with a rich flavour. With the option of vanilla or chocolate buttercream</p> */}
                          </div>
                          <div className='my-4 px-2  grid'>
                              <h1  className=' text-2xl font-bold my- text-gray-600'>RED VELVET w/ CREAM CHEESE</h1>
                              {/* <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p> */}
                          </div>
                          <div className='my-4 px-2  grid'>
                              <h1  className=' text-2xl font-bold my- text-gray-600'>FUNFETTI</h1>
                              {/* <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p> */}
                          </div>
                          <div className='my-4 px-2  grid'>
                              <h1  className=' text-2xl font-bold my- text-gray-600'>LEMON</h1>
                              {/* <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p> */}
                          </div>
                          <div className='my-4 px-2  grid'>
                              <h1  className=' text-2xl font-bold my- text-gray-600'>STRAWBERRY</h1>
                              {/* <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p> */}
                          </div>
                          <div className='my-4 px-2  grid'>
                              <h1  className=' text-2xl font-bold my- text-gray-600'>UBE</h1>
                              {/* <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p> */}
                          </div>
                          <div className='my-4 px-2  grid'>
                              <h1  className=' text-2xl font-bold my- text-gray-600'>BISCOFF</h1>
                              {/* <p  className='text-sm md:text-lg font-serif font-hairline'>Rich Chocolate cake layered with thick espresso chocolate sauce topped with artisan coffee buttercream or classic vanilla buttercream</p> */}
                          </div>
                      </div>
                      <p></p>
                  </div>
                  <div onClick={()=>setLayerFlavor(!layerFlavor)} className={`max-w-[900px] mx-auto font-extrabold  transition-all duration-1000 bg-[#e6ccb2] cursor-pointer ${layerFlavor ? 'h-auto py-10 rounded-xl' : 'h-[5rem] py-4 overflow-hidden  rounded-full'}`}>
                      <h2 className={`pt-4 pb-4 transition-all duration-1000 text-gray-800 font-black font-display  ${layerFlavor ? ' text-4xl' : ''}`}>CHOOSE OUTER LAYER OPTION</h2>
                      {/* <h1 className='my-8 font-hero text-gray-600 text-lg'>BASE</h1> */}
                      <div className='w-full  md:max-w-[900px] mx-auto  grid '>
                          <div className='my-4 px-2  grid'>
                              <h1 className='my-4 text-2xl font-bold text-gray-600'>OPTION 1: FONDANT LAYER</h1>
                              <p className='text-sm md:text-lg'>Fondant covered cakes are layered on top of vanilla buttercream</p>
                          </div>
                          <div className='my-4 px-2  grid'>
                              <h1 className='my-4 text-2xl font-bold text-gray-600'>OPTION 2: SWISS MERINGUE BUTTERCREAM</h1>
                              <p className='text-sm md:text-lg'>Cakes are covered and decorated with buttercream. Fondants decorations and accents are optional</p>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1 className='my-2 text-2xl font-bold text-gray-600'>VANILLA</h1>
                          </div>
                          <div className='my-2 px-2  grid '>
                              <h1  className='my-2 text-2xl font-bold text-gray-600'>CHOCOLATE (HAZELNUT)</h1>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1  className='my-2 text-2xl font-bold my- text-gray-600'>UBE</h1>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1 className='my-2 text-2xl font-bold text-gray-600'>LEMON</h1>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1 className='my-2 text-2xl font-bold text-gray-600'>STRAWBERRY</h1>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1 className='my-2 text-2xl font-bold text-gray-600'>CREAM CHEESE</h1>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1 className='my-2 text-2xl font-bold text-gray-600'>MATCHA</h1>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1 className='my-2 text-2xl font-bold text-gray-600'>COCONUT</h1>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1 className='my-2 text-2xl font-bold text-gray-600'>WHITE/DARK CHOCOLATE</h1>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1 className='my-2 text-2xl font-bold text-gray-600'>COOKIE BUTTER</h1>
                          </div>
                      </div>
                      <p></p>
                  </div>
                  <div onClick={()=>setFilling(!filling)} className={`max-w-[900px] mx-auto font-extrabold transition-all duration-1000 bg-[#e6ccb2] cursor-pointer ${filling ? 'h-auto py-10 rounded-xl' : 'h-[5rem] py-4 overflow-hidden  rounded-full'}`}>
                      <h2 className={`transition-all duration-1000 pt-4 pb-4 text-gray-800 font-gray-800 font-display ${filling ? 'text-4xl' : ''}`}>CHOOSE FILLINGS FLAVOR</h2>
                      {/* <h1 className='my-8 font-hero text-gray-600 text-lg'>BASE</h1> */}
                      <div className='w-full  md:max-w-[900px] mx-auto pt-4 grid '>
                          <h2> (optional)</h2>
                          <h2>Fillings are additional cost </h2>
                          <div className='my-2 px-2  grid'>
                              <h1 className='my-4 text-2xl font-bold text-gray-600'>STRAWBERRY</h1>
                          </div>
                          <div className='my-2 px-2  grid '>
                              <h1  className='my-4 text-2xl font-bold text-gray-600'>RASPBERRY</h1>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1  className='my-4 text-2xl font-bold my- text-gray-600'>LEMON CURD</h1>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1  className='my-4 text-2xl font-bold my- text-gray-600'>WHITE CHOCOLATE GANACHE</h1>
                          </div>
                          <div className='my-2 px-2  grid'>
                              <h1  className='my-4 text-2xl font-bold my- text-gray-600'>MILK OR DARK CHOCOLATE GANACHE</h1>
                          </div>
                      </div>
                      <p></p>
                  </div>
                </div>
                
            </div>
      </div>
    </div>
  );
};

export default Custom;
