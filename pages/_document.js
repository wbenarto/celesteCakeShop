import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=BIZ+UDMincho&family=Poiret+One&family=Raleway:wght@200;400&display=swap" rel="stylesheet" />
        {/* <script
            src={`https://maps.googleapis.com/maps/api/js?key=${settings?.googleMaps?.apiKey}&callback=initMap&libraries=&v=weekly`}
            async
          ></script> */}
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