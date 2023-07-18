import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/index.css'
import '../styles/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>Mindgem</title>
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
          ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;