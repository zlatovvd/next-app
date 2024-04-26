import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import '../styles/globals.css';

const myApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Top-app</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default myApp;
