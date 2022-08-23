import React from 'react'
import {Product} from '../../components/'
import { client, } from '../../lib/client';

const MenuCategory = ({products, pid}) => {
    
    // console.log(products)
    // console.log(router.query.type)
  return (
    <div className='h-full grid'>
     
        <p className='text-center text-red-400 font-bold text-2xl'>{pid.toUpperCase()}</p>
        <div className='flex flex-wrap justify-center gap-[15px] mt-10 w-full'>
          {products.map((e,i) => (
            <Product product={e} key={e.id} />
          ))}
        </div>

    </div>
  )
}

export async function getServerSideProps(context) {

    const pid  = context.params.type
    console.log(pid)

    const query = `*[_type == "product" && category=="${pid}"]`
    const products = await client.fetch(query)
  
   
    // console.log(bannerData, products)
    // console.log(products)
    return {
      props: {products, pid}
    }
  }


export default MenuCategory