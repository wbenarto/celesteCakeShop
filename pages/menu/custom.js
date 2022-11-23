import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { client } from "../../lib/client";

const custom = () => {
  const [imageUpload, setImageUpload] = useState(null)
  const [base64, setBase64] = useState(null)
  const router = useRouter();

  const getBase64 = (file) => {

    console.log('get base function ', file)

    return new Promise((resolve, reject)=> {
      let reader = new FileReader()
      reader.readAsDataURL(file)
  
      reader.onload = () => {
        setBase64(reader.result)
        resolve(reader.result)
      }

      reader.onerror = ((error) => {
        reject(error)
      })
    })
    

  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
   
      if (!field.name) return;
      
      formData[field.name] = field.value;
      if (field == 'phone') {
        formData[field.name] = Number(field.value)
      }
      if (field.name == 'imageFile') {
        console.log(field.name)
        console.log(base64)
        formData[field.name] = base64
        console.log(formData)
      }
      
    });

    console.log(formData)
    console.log(imageUpload)

    try {
      const result = await fetch("/api/sanity", {
        method: "POST",
        body: JSON.stringify({
          customer: formData.name,
          email: formData.email,
          phone: formData.phone,
          pickupDate: formData.date,
          description: formData.description,
          imageUrl: formData.imageFile,
        })
      })
      
      console.log('Result after fetch' , result)
      
    } catch (err) {
      console.log(err)
    }


    try {
      console.log(formData)
      const res = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      console.log(await res.json())
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

      <div className="px-4  w-full md:w-[900px] mx-auto bg-white ">
        <h1 className="p-8 md:py-10 border-b-2 font-hero border-gray-500 text-gray-500 text-center font-bold text-xl md:text-2xl">
          Custom Cake Order
        </h1>
        <form className=" gap-4   " onSubmit={handleOnSubmit}>
          <div className="flex-column py-2">
            <label className="flex pb-2 font-bold text-gray-600" htmlFor="name">
              Name
            </label>
            <input
              className="flex w-full p-2 border-2 rounded-md bg-gray-100"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="flex-column py-2">
            <label className="flex pb-2 font-bold text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              className="flex w-full p-2 border-2 rounded-md bg-gray-100"
              id="email"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="flex-column py-2">
            <label className="flex pb-2 font-bold text-gray-600" htmlFor="phone">
              Phone
            </label>
            <input
              className="flex w-full p-2 border-2 rounded-md bg-gray-100"
              id="phone"
              type="number"
              name="phone"
              placeholder="Phone"
            />
          </div>
          <div className="flex-column py-2">
            <label className="flex pb-2 font-bold text-gray-600" htmlFor="name">
              Pickup Date
            </label>
            <input
              className="flex w-full p-2 border-2 rounded-md bg-gray-100 "
              id="date"
              type="text"
              name="date"
              placeholder="Pickup Date"
            />
          </div>
          <div className="flex-column py-2">
            <label className="flex pb-2 font-bold text-gray-600" htmlFor="description">
              Description
            </label>
            <input
              className="flex w-full min-h-32 p-2 border-2 rounded-md bg-gray-100 overflow-wrap "
              id="description"
              type="text"
              name="description"
              placeholder="Description or Questions"
            />
          </div>
          <div className="flex-column py-2">
            <label className="flex pb-2  font-bold text-gray-600" htmlFor="imageURL">
              Sample Image URL
            </label>
            <input
              className="flex w-full p-2 border-2 rounded-md bg-gray-100 "
              id="imageURL"
              type="text"
              name="imageURL"
              placeholder="Insert Image URL"
            />
            <input
              type="file"
              name='imageFile'
              onChange={async (event) => {
                let convertImage = await getBase64(event.target.files[0])
                console.log(convertImage)
                // setImageUpload(event.target.files[0]);
              }}
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
