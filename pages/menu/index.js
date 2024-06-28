import React from "react";
import Link from "next/link";
import { client } from "../../lib/client";
import { Product } from "../../components/";
import {AiOutlineArrowRight} from 'react-icons/ai'

const menu = ({ products }) => {
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
      <div className="pt-10 flex-column border-2 h-48 overflow-hidden text-center justify-center">
        {/* <img src='/images/bday1.jpg' className='w-full h-full absolute object-contain' ></img> */}
        <p className="py-2 mb-2 font-bold text-4xl">Custom Design Your Cake</p>

        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeDhYKDhnuyxPmHKwx8HErkTMFFJ5rZ7U5Mw1PW57sbXFOL4g/viewform">
          <button
            className="bg-[#000000] text-sm md:text-base w-32 h-10 md:w-[180px] md:h-14 mx-auto border-2 gap-2 rounded-full text-center flex justify-center tracking-widest text-white font-bold items-center "
            type="button"
          >
            <p>ORDER HERE</p>
          </button>
        </Link>
      </div>
      <div className="h-full  md:px-4 xl:px-48 ">
        {/* <div className='w-full h-14 px-4 flex justify-between items-center'>
                <p>ALL</p>
                <p>CAKES</p>
                <p>CUPCAKES</p>
                <p>COOKIES</p>
                
            </div> */}
        <div className="w-full mx-auto h-full px-4 grid mt-8 gap-2 md:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:max-w-[1200px]">
          {products.length ? (
            products?.map((e) => <Product product={e} key={e.id} />)
          ) : (
            <>
              <p></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  return {
    props: { products },
  };
}

export default menu;
