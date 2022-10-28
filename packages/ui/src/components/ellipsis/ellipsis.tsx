import React from 'react';
import styled from 'styled-components';

export type EllipsisProps = {
};

const StyledEllipsis = styled.span`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Ellipsis_: React.FC<React.PropsWithChildren<EllipsisProps>> = ({ children }) => {
  return (<StyledEllipsis>{children}</StyledEllipsis>);
}

export const Ellipsis = React.memo(Ellipsis_);
