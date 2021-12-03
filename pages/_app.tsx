import React from "react";
import app from "next/app";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../constants/theme";

// Quick setup for material-ui and next-js see: https://itnext.io/next-js-with-material-ui-7a7f6485f671

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Tiny tasks</title>
        <meta
          name="description"
          content="Technical test for Octree by Simon Mulquin"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default app;
