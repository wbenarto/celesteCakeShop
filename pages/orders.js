import React from "react";
import Link from "next/link";
import { client } from "../lib/client";

const menu = ({ orders }) => {
  console.log(orders)
  return (
    <div className="min-h-full  bg-white">
      <div className='w-full h-[24rem] md:h-[32rem] bg-[url("/images/IMG_9544_jpg.jpg")]  bg-bottom md:bg-bottom md:bg-fixed bg-cover flex justify-center items-center'>
        <div className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full">
          <h1 className="font-aug text-5xl mb-4 text-white font-bold tracking-wide ">
            Celeste Shop
          </h1>
        </div>
      </div>
      <div className="px-4 flex-column border-2 overflow-hidden text-center justify-center  ">
        {/* <img src='/images/bday1.jpg' className='w-full h-full absolute object-contain' ></img> */}
        <p className="py-2 font-bold text-xl">ORDERS</p>
        {orders.map((e,i)=>(
            <div key={i} className=' mx-auto  my-2 flex max-w-[700px] justify-between text-xs sm:text-md'>
              <div className='text-left w-1/3 text-xs sm:text-md'>
                <p>{e.customer}</p>
                <p>{e.email}</p>
                <p>{e.phone}</p>
              </div>
              <div className='text-left w-1/2'>
                <p>{e.pickupDate}</p>
                <p>{e.size}</p>
                <p>{e.description}</p>
                <p>{e.baseFlavor}</p>
                <p>{e.outerFlavor}</p>
                <p>{e.fillingFlavor}</p>
              </div>
                
            </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const query = `*[_type == "orders"]`;
  const orders = await client.fetch(query);

  return {
    props: { orders },
  };
}

export default menu;
