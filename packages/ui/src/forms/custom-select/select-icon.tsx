import React, { SVGProps } from 'react';
import styled from 'styled-components';

const DownArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const DownArrow = styled(DownArrowSvg)`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-left: -2.8rem;
  align-self: center;
  pointer-events: none;
  transition: all 200ms ease;
  transition: color 200ms ease, transform 200ms ease;

  .opened & {
    transform: rotate(180deg);
  }
`;

const SelectIcon = React.memo(DownArrow);

export default SelectIcon;
