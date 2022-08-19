import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'

import { client } from '../lib/client'

const Home = ({bannerData, products}) => {
  console.log(bannerData, products)
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Cakes Cakes</p>
      </div>
      
      <div className='products-container'>
        {products.map((e,i) => (
          <Product product={e} key={e.id} />
        ))}
      </div>
      <FooterBanner />
    </>
  )
}

export async function getServerSideProps(context) {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)
  console.log(bannerData, products)
  return {
    props: {products, bannerData}
  }
}

export default Home

