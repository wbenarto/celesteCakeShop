import React from "react";
import Link from "next/link";
import { client } from "../lib/client";

const menu = ({ orders }) => {
  // console.log(products)
  return (
    <div className="min-h-full  bg-white">
      <div className='w-full h-[24rem] md:h-[32rem] bg-[url("/images/IMG_9544_jpg.jpg")]  bg-bottom md:bg-bottom md:bg-fixed bg-cover flex justify-center items-center'>
        <div className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full">
          <h1 className="font-aug text-5xl mb-4 text-white font-bold tracking-wide ">
            Celeste Shop
          </h1>
        </div>
      </div>
      <div className="pt-10 flex-column border-2 overflow-hidden text-center justify-center">
        {/* <img src='/images/bday1.jpg' className='w-full h-full absolute object-contain' ></img> */}
        <p className="py-2 font-bold text-xl">ORDERS</p>
        {orders.map((e,i)=>(
            <div className=' w-full h-[14rem] flex '>

                <img  className='w-40 h-full' src={e.imageUrl}/>
                <div>
                    <div className='flex'>
                        <p className='w-[30%]'>Name: </p>
                        <p className='w-full bg-red-100'>{e.customer}</p>
                    </div>
               
                <p>{e.pickupDate}</p>
                <p>{e.email}</p>
                <p>{e.phone}</p>
                <p>{e.pickupDate}</p>
                <p>{e.description}</p>

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
