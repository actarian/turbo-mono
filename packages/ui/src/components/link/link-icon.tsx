import React from 'react';
import styled from 'styled-components';

const LinkIconSvg: React.FC<unknown> = () => {
  return (
    <svg className="icon" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  );
}

const StyledLinkIcon = styled(LinkIconSvg)`
  width: 0.9375em;
  height: 0.9375em;
  margin: 0 0 -1px 0.1875em;
  display: inline-flex;
  align-self: center;
  color: currentColor;
`;

StyledLinkIcon.displayName = 'LinkIcon';

const LinkIcon = React.memo(StyledLinkIcon);

export default LinkIcon;
