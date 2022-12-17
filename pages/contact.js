import React from 'react'
import dynamic from "next/dynamic";

const NoSsr = dynamic(()=> import("../components/About"), {
  ssr: false,
})
const Home = () => {
  
  return (
    <NoSsr />
  )
}


export default Home

