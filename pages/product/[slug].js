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
    <div>
      <div className="md:flex gap-20 px-4 md:m-10 justify-center text-[#324d67]">
        <div>
          <div className="">
            <img src={urlFor(image && image[index])} className="w-full md:w-[300px] md:h-[400px]" />
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
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
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