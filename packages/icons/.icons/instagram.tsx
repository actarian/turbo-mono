
import React from 'react';
import InstagramSvg from '../svg/instagram.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Instagram = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<InstagramSvg {...props} ref={ref} />);
});

Instagram.displayName = 'Instagram';
