import React, { useState, Fragment } from "react";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";
import Dropdown from "../../components/Dropdown";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Link from 'next/link'

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
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
  const sizeOptions = ["6in - Small", "8in - Medium", "10in - Large", "12in - Extra Large"];
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
  const fillingsOptions = [
    "Strawberry",
    "Raspberry",
    "Lemon Curd",
    "White Chocolate",
    "Milk or Dark Chocolate Ganache"
  ]
  const [size, setSize] = useState(sizeOptions[0]);
  const [base, setBase] = useState(baseOptions[0]);
  const [fondant, setFondant] = useState(fondantOptions[0]);
  const [fillings, setFillings] = useState(fillingsOptions[0]);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState('')

  const handleSelection = (e, title) => {
    if (title == "Size") {
      setSize(e);
    } else if (title == "Base") {
      setBase(e);
    } else if (title == "Fondant / Buttercream") {
      setFondant(e);
    } else if (title == "Fillings") {
      setFillings(e)
    }
  };

  const onInputChange = (e) => {
    setEmail(e.target.value)
  }

  const sendMail = async () => {

    const formData={ 
      "size" : size, 
      "baseFlavor" : base,
      "outerFlavor": fondant,
      "fillingFlavor": fillings,
      "email": email,
      "cakeDesign" : name

    }
    try {
      const res = await fetch("/api/mail2", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      console.log(await res.json())
      toast.success("Thank you for your order inquiry!");
      router.push("/menu");
    } catch (err) {
      console.log(err);
    }
  }

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div className=" bg-white h-full ">
      <div className='w-full  h-[24rem] md:h-[32rem] bg-[url("/images/IMG_4188.jpg")]  bg-bottom md:bg-center md:bg-fixed bg-cover flex justify-center items-center'>
        <div className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full">
          <h1 className="font-aug text-center text-5xl mb-4 text-white font-bold tracking-wide ">
            Product Detail{" "}
          </h1>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-12  mx-auto md:max-w-[1200px]  gap-4 p-4 rounded-lg  text-[#324d67]">
        <div className="sm:col-span-8 my-auto">
          <img
            src={urlFor(image && image[index])}
            className="w-full rounded-md "
          />
        </div>
        <div className=" sm:mt-28 rounded-lg p-4 sm:h-[auto] sm:col-span-4 md:col-span-4  ">
          <div className=" text-black  pb-4">
            <h1 className="text-2xl p-2 font-bold sm:text-3xl md:text-5xl text-gray-600 border-gray-600 border-b-2 md:py-8">
              {name}
            </h1>
            <p className="sm:text-2xl p-2 md:py-8">{details}</p>

            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeDhYKDhnuyxPmHKwx8HErkTMFFJ5rZ7U5Mw1PW57sbXFOL4g/viewform">
              <button
                className="hover:bg-[#000000] text-sm md:text-base w-32 h-10 md:w-[180px] md:h-14 my-8 border-2 gap-2 rounded-full text-center flex justify-center tracking-widest text-black font-bold items-center bg-[#e6ccb2] hover:text-white "
                type="button"
              >
                <p>ORDER HERE</p>
              </button>
            </Link>
          </div>

        </div>
      </div>

      <div className="w-full  pb-8 text-center px-4  bg-white overflow-hidden">
        <h2 className="text-2xl sm:text-4xl font-hero py-4 font-mont  font-bold text-gray-600 sm:my-12">
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

  return {
    props: { products, product },
  };
};

export default ProductDetails;
