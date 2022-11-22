

import { css } from 'styled-components';

export const CssPrint = css`
.print-none {
  @media print {
    display: none;
  }
}
.screen-none {
  @media screen {
    display: none;
  }
}
`;
