import { CartProvider, LabelProvider, LayoutProvider, PageProvider } from '@websolute/hooks';
import type { ILayout, IPage, IRouteParams } from '@websolute/models';
import { Breakpoint, GlobalStyle, theme } from '@websolute/ui';
import Head from 'next/head';
// import { NextPage } from 'next';
// import { AppProps } from 'next/app';
import { IronSessionStorage } from 'src/config/session';
import { ThemeProvider } from 'styled-components';

export default function Application({ Component, pageProps }: ApplicationProps) {
  // const Application: NextPage<AppProps<{ [key: string]: any }>> = ({ Component, pageProps }) => {

  const { layout, page } = pageProps;

  if (!layout || !page) {
    return;
  }

  return (
    <>
      <Head>
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet"></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800&family=Petrona:wght@300&display=swap" rel="stylesheet"></link> */}
      </Head>
      <LayoutProvider layout={layout}>
        <LabelProvider>
          <PageProvider page={page}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <CartProvider storage={IronSessionStorage}>
                <Component {...pageProps} />
              </CartProvider>
              <Breakpoint></Breakpoint>
            </ThemeProvider>
          </PageProvider>
        </LabelProvider>
      </LayoutProvider>
    </>
  )
}

export type ApplicationProps = {
  Component: any;
  pageProps: {
    layout: ILayout,
    page: IPage,
    params: IRouteParams,
    [key: string]: any
  };
}
