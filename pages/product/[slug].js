import React, { useState, Fragment } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";
import Dropdown from "../../components/Dropdown";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const baseOptions = ["Classic Vanilla", "Dark Chocolate", "Mocha Delight"];
  const sizeOptions = ["Small", "Medium", "Large"];
  const fondantOptions = [
    "Salted Caramel Frosting",
    "Red Velvel Fondant",
    "Lemon Cheese Layer",
  ];
  const [size, setSize] = useState(sizeOptions[0]);
  const [base, setBase] = useState(baseOptions[0]);
  const [fondant, setFondant] = useState(fondantOptions[0]);
  const [message, setMessage] = useState("");

  console.log(message);
  const handleSelection = (e, title) => {
    if (title == "Size") {
      setSize(e);
    } else if (title == "Base") {
      setBase(e);
    } else if (title == "Fondant") {
      setFondant(e);
    }
  };

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div className=" bg-white h-full ">
      <div className='w-full  h-[14rem] md:h-[20rem] bg-[url("/images/IMG_4188.jpg")]  bg-bottom md:bg-center md:bg-fixed bg-cover flex justify-center items-center'>
        <div className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full">
          <h1 className="font-aug text-center text-5xl mb-4 text-white font-bold tracking-wide ">
            Product Detail{" "}
          </h1>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-8  mx-auto md:max-w-[1200px]  gap-4 p-4 rounded-lg  text-[#324d67]">
        <div className="sm:col-span-3 my-auto">
          <img
            src={urlFor(image && image[index])}
            className="w-full rounded-md "
          />
        </div>
        <div className="mt-4 bg-[rgba(240,240,240,0.97)]  bg-p rounded-lg p-4 sm:h-[auto] sm:col-span-5 md:col-span-5 sm:mt-0 ">
          <div className=" text-gray-500  pb-10">
            <h1 className="text-2xl p-2 font-bold sm:text-3xl md:text-5xl border-gray-600 border-b-2 md:py-8">
              {name}
            </h1>
            <p className="sm:text-2xl min-h-[8rem] p-2 md:py-8">{details}</p>

            <div className="grid">
              {/* Size*/}
              {/* <Dropdown
                options={sizeOptions}
                title="Size"
                selection={size}
                handleSelection={handleSelection}
              /> */}

              {/* Base */}
              <Dropdown
                options={baseOptions}
                title="Base"
                selection={base}
                handleSelection={handleSelection}
              />

              {/* Fondant Flavor */}
              <Dropdown
                options={fondantOptions}
                title="Fondant"
                selection={fondant}
                handleSelection={handleSelection}
              />

              {/* Message */}
              <div className="flex py-2 items-center ">
                <p className="p-1 text-sm w-24 font-bold">Birthday Message: </p>
                <input
                  type="text"
                  className="px-2 flex items-center justify-between w-full  bg-white rounded-md h-10 text-sm md:text-base"
                  onChange={(e) => setMessage(e.target.value)}
                />
                {message.length >= 30 ? (
                  <p className="absolute text-sm text-center mx-auto bg-red-200 mt-24">
                    Message must be less than 30 characters
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          <div className="mb-0 p-2 mt-2 border-t-2 border-gray-600 h-[4rem] flex gap-2 md:mt-8 ">
            <p className="w-1/4 text-center my-auto text-3xl font-bold md:text-4xl">
              ${price}
            </p>
            <button className="w-3/4 h-full  bg-green-200  rounded-full grid ">
              <p
                className=" my-auto font-bold text-center"
                onClick={() => onAdd(product, 1, base, fondant, message)}
              >
                ADD TO CART
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full  pb-8 text-center px-4  bg-white overflow-hidden">
        <h2 className="sm:text-2xl font-hero py-4  text-gray-500 mb-4">
          OTHER BAKED GOODS
        </h2>
        <div className="w-full overflow-x-scroll hover:pause">
          <div className=" flex gap-2 md:gap-10">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  // console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
