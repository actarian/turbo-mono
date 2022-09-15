import { LabelProvider, LayoutProvider, PageProvider } from '@websolute/hooks';
import type { ILayout, IPage, IRouteParams } from '@websolute/models';
import { Breakpoint, GlobalStyle, theme } from '@websolute/ui';
// import { NextPage } from 'next';
// import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

export default function Application({ Component, pageProps }: ApplicationProps) {
  // const Application: NextPage<AppProps<{ [key: string]: any }>> = ({ Component, pageProps }) => {

  // const { layout, page } = pageProps;

  const layout = {
    market: 'ww',
    locale: 'en',
    markets: [],
    locales: [],
    labels: [],
    tree: undefined,
  };

  const page = {};

  console.log('layout', layout, 'page', page);

  return (
    <>
      <LayoutProvider layout={layout}>
        <LabelProvider>
          <PageProvider page={page}>
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
