import { CartProvider, LabelProvider, LayoutProvider, PageProvider } from '@websolute/hooks';
import type { ILayout, IPage, IRouteParams } from '@websolute/models';
import { Breakpoint, GlobalStyle, theme } from '@websolute/ui';
// import { NextPage } from 'next';
// import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function Application({ Component, pageProps }: ApplicationProps) {
  // const Application: NextPage<AppProps<{ [key: string]: any }>> = ({ Component, pageProps }) => {

  const { layout, page } = pageProps;

  if (!layout || !page) {
    return;
  }

  return (
    <>
      <LayoutProvider layout={layout}>
        <LabelProvider>
          <PageProvider page={page}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <CartProvider>
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
