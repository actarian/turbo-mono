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

const Ellipsis: React.FC<React.PropsWithChildren<EllipsisProps>> = ({ children }) => {
  return (<StyledEllipsis>{children}</StyledEllipsis>);
}

export default React.memo(Ellipsis);
