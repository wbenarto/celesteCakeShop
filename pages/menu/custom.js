import React from 'react'
import { useRouter } from 'next/router'

const custom = () => {
    const router = useRouter()
    async function handleOnSubmit(e) {
        e.preventDefault();
    
        const formData = {};
    
        Array.from(e.currentTarget.elements).forEach(field => {
          if ( !field.name ) return;
          formData[field.name] = field.value;
        });
     
        try {
            await fetch('/api/mail', {
                method: 'POST',
                body: JSON.stringify(formData)
            });

            router.push('/menu')
     

        } catch(err) {
            console.log(err)
        }
        
      }
  return (
    <div className='grid pt-[80px]  w-full mx-auto px-4 bg-white  sm:px-14 md:px-24 lg:px-48'>
        <h1 className=' p-8 border-b-2 font-hero border-gray-500 text-gray-500 rounded-md text-center font-bold text-xl'>Custom Cake Order</h1>
        <form className='p-4 gap-4  ' onSubmit={handleOnSubmit}>
            <div className='flex-column py-2'>
                <label className='flex pb-2' htmlFor='name'>Name</label>
                <input className='flex w-full p-2 border-b-2 bg-transparent' id='name' type='text' name='name'/>
            </div>
            <div className='flex-column py-2'>
                <label className='flex pb-2' htmlFor='email'>Email</label>
                <input className='flex w-full p-2 border-b-2 bg-transparent' id='email' type='text' name='email'/>
            </div>
            <div className='flex-column py-2'>
                <label className='flex pb-2' htmlFor='name'>Pickup Date</label>
                <input className='flex w-full p-2 border-b-2 bg-transparent' id='date' type='text' name='date'/>
            </div>
            <div className='flex-column py-2'>
                <label className='flex pb-2' htmlFor='description'>Description</label>
                <input className='flex w-full p-2 border-b-2 bg-transparent' id='description' type='text' name='description'/>
            </div>
            <div className='flex-column py-2'>
                <label className='flex pb-2' htmlFor='imageURL'>Sample Image URL</label>
                <input className='flex w-full p-2 border-b-2 bg-transparent' id='imageURL' type='text' name='imageURL'/>
            </div>
            <div className='flex-column justify-center flex py-4'>
                <button className='border-2 border-gray-400 rounded-md p-3  text-gray-500'>Submit</button>
            </div>
        </form> 


    </div>
  )
}

export default custom