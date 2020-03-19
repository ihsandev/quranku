import App from "next/app";
import Head from "next/head";
import React from "react";
import './global.css';
import { MainLayout } from 'Containers';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Qur'anku App</title>
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    );
  }
}

export default MyApp;
