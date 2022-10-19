import { createGlobalStyle } from 'styled-components';
import { CssScrollbar } from './mixins/_scrollbar';
import { CssBase } from './_base';
import { CssDebug } from './_debug';
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

  @import url('https://rsms.me/inter/inter.css');
  // @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800&family=Petrona:wght@300&display=swap');

  ${swiperCss}

  ${CssReset}
  ${CssVars}
  ${CssBase}
  ${CssTypography}
  ${CssScrollbar}
  ${CssDebug}

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle
