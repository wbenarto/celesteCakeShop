import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html className='scroll-smooth'>
        <Head>
          <title>Celeste Cakeshop, Orlando's Best Custom Design Cakeshop</title>
          <meta name="description" content="Custom Design cakes in Orlando" />
          <meta name="keywords" content="Orlando, Bakery, Cake, Cakeshop, Custom, Custom made, Florida, Custom Cake" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
          <link rel="shortcut icon" href="/images/celeste.png" />
          <link href="https://fonts.googleapis.com/css2?family=BIZ+UDMincho&family=Caveat&family=Montserrat:wght@100;300;400;500;600;800&family=Nanum+Myeongjo:wght@700&family=Poiret+One&family=Raleway:wght@200;400&display=swap" rel="stylesheet" />
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
            async
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument