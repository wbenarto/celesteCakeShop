import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className='font-body bg-[#fdf5dc]'>
            <Head>
                <title>Celeste Cake Shop!</title>

            </Head>
            <header>
                <Navbar />
            </header>
            <main className='bg-[#fdf5dc] w-full margin-auto max-w-[1400px]'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout