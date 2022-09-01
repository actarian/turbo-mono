import { Breakpoint, GlobalStyle, theme } from 'ui';
// import '@styles/globals.scss';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

const Application: NextPage<AppProps<{ [key: string]: any }>> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {false && <style>
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800&family=Petrona:wght@300&display=swap');
        </style>}
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Breakpoint></Breakpoint>
      </ThemeProvider>
    </>
  )
}

/*
  <StyleSheetManager disableVendorPrefixes>
  </StyleSheetManager>
*/

export default Application;
