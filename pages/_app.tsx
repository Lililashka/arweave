import "../styles/index.scss"
import { Fragment } from 'react'
import Router from 'next/router'
import App from 'next/app'
import Head from 'next/head'
import * as gtag from '../libs/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default class MyApp extends App {

  installGTAG() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `
    };
  }

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
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}></script>
          <script type="text/javascript" dangerouslySetInnerHTML={this.installGTAG()} />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    )
  }
}