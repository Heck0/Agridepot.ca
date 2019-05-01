import "isomorphic-unfetch";
import React from "react";
import App, { Container } from "next/app";

import NextSeo from "next-seo";
import SEO from "../next-seo.config";

import { Layout } from "../components";

export default class Agridepot extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    // if (typeof window !== 'undefined') {
    //   const WebFont = require('webfontloader')
    //   WebFont.load({
    //     google: {
    //       families: ['Roboto Condensed:400,700', 'Roboto:400,700']
    //     }
    //   })
    // }
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NextSeo config={SEO} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
