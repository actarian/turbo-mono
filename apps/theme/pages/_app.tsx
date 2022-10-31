import { CartProvider, LabelProvider, LayoutProvider, PageProvider } from '@websolute/hooks';
import { LayoutDefaults, PageDefaults } from '@websolute/mock';
import { ILayout, IPage, IRouteParams } from '@websolute/models';
import { Breakpoint, GlobalStyle, theme } from '@websolute/ui';
// import { NextPage } from 'next';
// import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

export default function Application({ Component, pageProps, router }: ApplicationProps) {
  // const Application: NextPage<AppProps<{ [key: string]: any }>> = ({ Component, pageProps }) => {

  // const { layout, page } = pageProps;

  const layout = LayoutDefaults as ILayout;

  const page = PageDefaults as IPage;

  // console.log('layout', layout, 'page', page);

  return (
    <>
      <LayoutProvider layout={layout}>
        <LabelProvider>
          <PageProvider page={page}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <CartProvider>
                <AnimatePresence mode="wait">
                  <Component {...pageProps} key={router.route} />
                </AnimatePresence>
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
  router: any;
  pageProps: {
    layout: ILayout,
    page: IPage,
    params: IRouteParams,
    [key: string]: any
  };
}
