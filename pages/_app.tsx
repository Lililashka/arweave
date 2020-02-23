import "../styles/index.scss"
import { Fragment } from 'react'
import App from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    )
  }
}