import { getClassNames } from '@websolute/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { PaginationItem } from './pagination-item';

type Props = {
  isBefore?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const StyledPaginationItem = styled(PaginationItem)`
  svg {
    color: currentColor;
    stroke: currentColor;
    width: 1em;
    height: 1em;
  }
  .more.before {
    transform: rotate(180deg);
  }
`

export const PaginationEllipsis: React.FC<Props> = ({ isBefore, onClick }) => {
  const [showMore, setShowMore] = useState(false);
  const moreClassNames = getClassNames('more', { before: isBefore });
  return (
    <StyledPaginationItem
      onClick={e => onClick && onClick(e)}
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}>
      {showMore ? (
        <svg
          className={moreClassNames}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          shapeRendering="geometricPrecision">
          <path d="M13 17l5-5-5-5" />
          <path d="M6 17l5-5-5-5" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          shapeRendering="geometricPrecision">
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="19" cy="12" r="1" fill="currentColor" />
          <circle cx="5" cy="12" r="1" fill="currentColor" />
        </svg>
      )}
    </StyledPaginationItem>
  );
}

PaginationEllipsis.displayName = 'PaginationEllipsis';
