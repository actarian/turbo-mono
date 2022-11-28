import { CartProvider, LabelProvider, LayoutProvider, PageProvider } from '@websolute/hooks';
import { ILayout, IPage, IRouteParams } from '@websolute/models';
import { registerCollections } from '@websolute/store';
import { Breakpoint, GlobalStyle, theme } from '@websolute/ui';
import { COLLECTIONS } from 'src/config';
import { ThemeProvider } from 'styled-components';

registerCollections(COLLECTIONS);

export default function Application({ Component, pageProps }: ApplicationProps) {
  // const Application: NextPage<AppProps<{ [key: string]: any }>> = ({ Component, pageProps }) => {

  const { layout, page } = pageProps;

  if (!layout || !page) {
    return;
  }

  return (
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
  );
}

export type ApplicationProps = {
  Component: any;
  pageProps: {
    layout: ILayout,
    page: IPage,
    params: IRouteParams,
    [key: string]: any
  };
};
