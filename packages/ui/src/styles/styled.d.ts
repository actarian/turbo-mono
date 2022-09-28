import 'styled-components';
import { CSSObject, CSSProp } from 'styled-components';
import type { ITheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme { }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
