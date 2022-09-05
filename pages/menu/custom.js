import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const custom = () => {
  const router = useRouter();
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    try {
      await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      toast.success("Thank you for your order!");
      router.push("/menu");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="grid bg-[#fff0f5]  w-full mx-auto">
      <div className='w-full h-[24rem] md:h-[32rem] bg-[url("/images/IMG_4188.jpg")]  bg-bottom md:bg-center md:bg-fixed bg-cover flex justify-center items-center'>
        <div className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center  w-full h-full">
          <h1 className="font-aug text-5xl mb-4 text-white font-bold tracking-wide ">
            Cake Design{" "}
          </h1>
        </div>
      </div>

      <div className="px-4  w-full md:w-[900px] mx-auto ">
        <h1 className="p-8 md:py-10 border-b-2 font-hero border-gray-500 text-gray-500 rounded-md text-center font-bold text-xl md:text-2xl">
          Custom Cake Order
        </h1>
        <form className=" gap-4   " onSubmit={handleOnSubmit}>
          <div className="flex-column py-2">
            <label className="flex pb-2" htmlFor="name">
              Name
            </label>
            <input
              className="flex w-full p-2 border-b-2 bg-transparent"
              id="name"
              type="text"
              name="name"
            />
          </div>
          <div className="flex-column py-2">
            <label className="flex pb-2" htmlFor="email">
              Email
            </label>
            <input
              className="flex w-full p-2 border-b-2 bg-transparent"
              id="email"
              type="text"
              name="email"
            />
          </div>
          <div className="flex-column py-2">
            <label className="flex pb-2" htmlFor="name">
              Pickup Date
            </label>
            <input
              className="flex w-full p-2 border-b-2 bg-transparent"
              id="date"
              type="text"
              name="date"
            />
          </div>
          <div className="flex-column py-2">
            <label className="flex pb-2" htmlFor="description">
              Description
            </label>
            <input
              className="flex w-full p-2 border-b-2 bg-transparent"
              id="description"
              type="text"
              name="description"
            />
          </div>
          <div className="flex-column py-2">
            <label className="flex pb-2" htmlFor="imageURL">
              Sample Image URL
            </label>
            <input
              className="flex w-full p-2 border-b-2 bg-transparent"
              id="imageURL"
              type="text"
              name="imageURL"
            />
          </div>
          <div className="flex-column justify-center flex py-4">
            <button
              className=" bg-red-300 w-40 h-10 gap-2 md:w-[150px] hover:animate-wiggle md:h-14 rounded-full mt-4 text-center flex justify-center text-white items-center"
              type="submit"
            >
              SUBMIT{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default custom;
