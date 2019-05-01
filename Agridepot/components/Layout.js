import React, { Component } from "react";
import Head from "next/head";
import NextSeo from "next-seo";
import Router from "next/router";
import NProgress from "nprogress";
import styled, { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./GlobalStyle";
import { Header, Footer } from "./";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class Layout extends Component {
  state = {
    token: null
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <GlobalStyle />
        <Normalize />
        <Header />

        <div>{this.props.children}</div>

        <Footer />
      </>
    );
  }
}

// // <NextSeo
// //   config={{
// //     // title: `${title ? `${title} | ` : ``}XReload`,
// //     description: 'This will be the page meta description',
// //     // canonical: 'https://www.canonicalurl.ie/',
// //     // openGraph: {
// //     //   title
// //     // }
// //   }}
// // />
