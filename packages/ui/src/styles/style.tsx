import { createGlobalStyle } from 'styled-components';
import { CssScrollbar } from './mixins/_scrollbar';
import { CssBase } from './_base';
import { CssDebug } from './_debug';
import { CssPrint } from './_print';
import { CssReset } from './_reset';
import { CssTypography } from './_typography';
import { CssVars } from './_vars';

// Import Swiper styles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import swiperCss from '!!raw-loader!swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const GlobalStyle = createGlobalStyle`

  ${swiperCss}

  ${CssReset}
  ${CssVars}
  ${CssBase}
  ${CssTypography}
  ${CssScrollbar}
  ${CssPrint}
  ${CssDebug}

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
