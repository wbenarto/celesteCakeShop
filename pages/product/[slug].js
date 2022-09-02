import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar, AiFillCaretDown } from 'react-icons/ai';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const [sizeOpen, setSizeOpen] = useState(false)
  const [fondantOpen, setFondantOpen ] = useState(false)
  const [baseOpen, setBaseOpen] = useState(false)

  const [size, setSize] = useState('MD')
  const [fondant, setFondant] = useState('')
  const [base, setBase] = useState('')

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
        <div className='h-[26rem] mt-4 bg-[rgba(240,240,240,0.97)] drop-shadow-lg bg-p rounded-lg p-4 sm:h-auto sm:col-span-5 md:col-span-5 sm:mt-0 '>
          <div className='text-gray-500 border-b-2 border-gray-600 pb-10'>
            <h1 className='text-2xl p-2 font-bold sm:text-3xl md:text-5xl border-gray-600 border-b-2 md:py-8'>{name}</h1>
            <p className='sm:text-2xl min-h-[8rem] p-2 md:py-8'>{details}</p>
            <div className='flex justify-between sm:justify-center sm:gap-20  h-[6rem]'>

              {/* Base Flavor */}
              <div className='relative w-[6rem] h-full grid text-center my-auto  border-gray-600 border-2'>
              
                <button onClick={()=>setBaseOpen(!baseOpen)} className='mx-auto flex items-center justify-center' >
                  <p className='p-1 text-sm font-bold'>BASE</p><AiFillCaretDown  />
                </button>

                <div className={baseOpen ? 'grid absolute mt-8 z-99 bg-white left-0 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  top-0' : "hidden" }>
                  <div className='w-40 z-99 h-10  grid grid-cols-5 hover:bg-gray-200'><button className='col-span-4 text-xs '>CLASSIC VANILLA</button><div className='col-span-1 self-center'>1</div></div>
                  <div className='w-40 z-99 h-10  grid grid-cols-5 hover:bg-gray-200'><button className='col-span-4 text-xs'>DARK CHOCOLATE</button><div className='col-span-1 self-center'>2</div></div>
                  <div className='w-40 z-99 h-10  grid grid-cols-5 hover:bg-gray-200'><button className='col-span-4 text-xs'>MOCHA DELIGHT</button><div className='col-span-1 self-center'>3</div></div>
                </div>
                  <div className='bg-red-400 w-[2.5rem] h-[2.5rem] rounded-full mx-auto'></div>
              </div>
       
              {/* <div className='w-[6rem] h-full text-center p-1 grid border-gray-600 border-2'>

              <div className='flex items-center justify-center'>
              <p className='p-1 text-sm font-bold'>BASE</p><AiFillCaretDown />
          
              </div>  
              <div className='bg-amber-700 w-[2.5rem] h-[2.5rem] rounded-full mx-auto'></div>
              </div> */}


              {/* Size */}
              <div className='relative w-[6rem] h-full text-center p-1 grid border-gray-600 border-2'>
              
              <button onClick={()=>setSizeOpen(!sizeOpen)} className='mx-auto flex items-center justify-center' >
                <p className='p-1 text-sm font-bold'>SIZE</p><AiFillCaretDown  />
              </button>

              <div className={sizeOpen ? 'grid absolute mt-8 z-99 bg-white left-0 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  top-0' : "hidden" }>
                  <div className='w-40 z-99 h-10  grid grid-cols-5 hover:bg-gray-200'><button className='col-span-3 text-xs'>Small</button><p className='col-span-2 self-center'>$65</p></div>
                  <div className='w-40 z-99 h-10  grid grid-cols-5 hover:bg-gray-200'><button className='col-span-3 text-xs'>Medium</button><p className='col-span-2 self-center'>$90</p></div>
                  <div className='w-40 z-99 h-10  grid grid-cols-5 hover:bg-gray-200'><button className='col-span-3 text-xs'>Large</button><p className='col-span-2 self-center'>$120</p></div>
                </div>
                <p className='text-3xl  font-bold'>{size}</p>
              </div>


              {/* Fondant Flavor */}
              <div className='relative w-[6rem] h-full grid text-center my-auto  border-gray-600 border-2'>
              
                <button onClick={()=>setFondantOpen(!fondantOpen)} className='mx-auto flex items-center justify-center' >
                  <p className='p-1 text-sm font-bold'>FONDANT</p><AiFillCaretDown  />
                </button>

                <div className={fondantOpen ? 'grid absolute mt-8 z-99 bg-white right-0 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  top-0' : "hidden" }>
                  <div className='w-40 z-99 h-10  grid grid-cols-5 hover:bg-gray-200'><button className='col-span-4 text-xs '>SALTED CARAMEL FROSTING</button><div className='col-span-1 self-center'>1</div></div>
                  <div className='w-40 z-99 h-10  grid grid-cols-5 hover:bg-gray-200'><button className='col-span-4 text-xs'>RED VELVET FONDANT</button><div className='col-span-1 self-center'>2</div></div>
                  <div className='w-40 z-99 h-10  grid grid-cols-5 hover:bg-gray-200'><button className='col-span-4 text-xs'>LEMON CHEESE LAYER</button><div className='col-span-1 self-center'>3</div></div>
                </div>
                  <div className='bg-red-400 w-[2.5rem] h-[2.5rem] rounded-full mx-auto'></div>
              </div>
       

            </div>
          </div>
          <div className='mb-0 p-2 mt-2 h-[4rem] flex gap-2 md:mt-8 '>
            <p className='w-1/4 text-center my-auto text-3xl font-bold md:text-4xl'>${price}</p>
            <button className='w-3/4 h-full  bg-green-200  drop-shadow-lg rounded-full grid '>
              <p className=' my-auto font-bold text-center' onClick={() => onAdd(product, 1)}>ADD TO CART</p>
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
          <h2 className='sm:text-2xl font-hero py-4 text-gray-500 mb-4' >OTHER BAKED GOODS</h2>
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