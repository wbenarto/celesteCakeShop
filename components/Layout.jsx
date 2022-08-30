
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import React, { useState, useEffect } from 'react'

const Layout = ({ children }) => {
    const [scrollDown, setScrollDown] = useState(false)

    let lastScrollTop = 0;

    const handleScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop <= lastScrollTop || scrollTop <= 140) {
            setScrollDown(true);
        } else {
            setScrollDown(false);
        }
        lastScrollTop = scrollTop;
    };

    useEffect(() => {
        setScrollDown(true);
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='flex-column w-full  font-body  bg-[#fff0f5] '>
            <Head>
                <title>Celeste Cake Shop!</title>

            </Head>
            <header className={scrollDown ? 'visible duration-500 ease-in transition-all' : 'invisible transition-all'}>
                <Navbar />
            </header>
            <main className=' min-h-screen mx-auto  '>
                {children}
            </main>
            <footer className=''>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout