import React, { SVGProps } from 'react';
import styled from 'styled-components';

const XSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Clear = styled(XSvg)`
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  margin-left: 0.2em;
  align-self: center;
  transition: all 200ms ease;

  &:hover {
    color: var(--color-primary-900);
  }
`;

const SelectIconClear = React.memo(Clear);

export default SelectIconClear;
