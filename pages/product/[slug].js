import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <div className='bg-white h-full '>
      <div className='w-full  h-[14rem] md:h-[20rem] bg-[url("/images/IMG_4188.jpg")]  bg-bottom md:bg-center md:bg-fixed bg-cover flex justify-center items-center'>
                <div className='bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full'><h1 className='font-aug text-center text-5xl mb-4 text-white font-bold tracking-wide '>Product Detail </h1></div>
      </div>
      <div className="sm:grid sm:grid-cols-8  mx-auto md:max-w-[1200px]  gap-4 p-4 rounded-lg  text-[#324d67]">
        <div className="sm:col-span-3 my-auto">
          <img src={urlFor(image && image[index])} className="w-full rounded-md " />
        </div>
        <div className='h-[26rem] mt-4 bg-[#fff0f5] rounded-lg p-4 sm:h-auto sm:col-span-5 md:col-span-5 sm:mt-0 '>
          <div className='text-gray-500 border-b-2 border-gray-600 pb-10'>
            <h1 className='text-2xl p-2 font-bold sm:text-3xl md:text-5xl border-gray-600 border-b-2 md:py-8'>{name}</h1>
            <p className='sm:text-2xl min-h-[8rem] p-2 md:py-8'>{details}</p>
            <div className='flex justify-evenly sm:justify-center sm:gap-20  h-[6rem]  '>
              <div className='w-[6rem] h-full text-center p-1  border-gray-600 border-2'>
                
              <p className='p-1 font-[800]'>BASE</p>

              <div className='bg-amber-700 w-[2.5rem] h-[2.5rem] rounded-full mx-auto'></div>
              </div>
              <div className='w-[6rem] h-full text-center p-1  border-gray-600 border-2'>
                
              <p className='p-1 font-bold'>SIZE</p>

              <p className='text-3xl p-2 font-bold'>MD</p>
              </div>

              <div className='w-[6rem] h-full text-center p-1  border-gray-600 border-2'>
                
              <p className='p-1 font-bold'>FONDANT</p>

              <div className='bg-red-400 w-[2.5rem] h-[2.5rem] rounded-full mx-auto'></div>
              </div>

            </div>
          </div>
          <div className='mb-0 p-2 mt-2 h-[4rem] flex gap-2 md:mt-8 '>
            <p className='w-1/4 text-left my-auto text-3xl font-bold md:text-4xl'>${price}</p>
            <button className='w-3/4 h-full  bg-green-200 rounded-full grid '>
              <p className=' my-auto font-bold text-center ' onClick={() => onAdd(product, 1)}>ADD TO CART</p>
            </button>
           
          </div>
          
        </div>



{/* 
        <div>
          <div className="">
            <img src={urlFor(image && image[index])} className="w-full sm:w-[300px] " />
          </div>
          <div className="flex gap-4 mt-4">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'bg-red-400 w-24 h-32 rounded-md object-cover cursor-pointer ' : ' w-24 h-32 rounded-md object-cover cursor-pointer '}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="">
          <h1 className=" md:text-4xl">{name}</h1>
          <div className="text-red-300 flex gap-2 items-center">
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p className='min-h-[80px] md:min-h-[150px]'>{details}</p>
          <p className="text-2xl py-5 font-bold">${price}</p>
          <div className="flex h-14 gap-4 items-center">
            <h3 className=''>Quantity:</h3>
            <p className="flex gap-4 items-center">
              <button className="text-red-400 text-2xl" onClick={decQty}><AiOutlineMinus /></button>
              <span className="text-2xl">{qty}</span>
              <button className="text-green-400 text-2xl" onClick={incQty}><AiOutlinePlus /></button>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div> */}



      </div>

      <div className="w-full  pb-8 text-center  bg-white overflow-hidden">
          <h2 className='sm:text-2xl font-hero py-4  mb-4' >OTHER BAKED GOODS</h2>
          <div className="w-full animate-slide hover:pause">
            <div className=" flex gap-2 md:gap-10">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  // console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails