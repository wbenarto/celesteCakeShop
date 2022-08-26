import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className='font-body z-99 bg-[#e6d5da] '>
            <Head>
                <title>Celeste Cake Shop!</title>

            </Head>
            <header >
                <Navbar />
            </header>
            <main className='w-full min-h-screen mx-auto  '>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout