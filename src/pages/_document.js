import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='scroll-smooth'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='theme-color' content='#000000' />
          <link rel='shortcut icon' href='/favicon.ico' />
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
