
import React from 'react';
import InstagramSvg from '../icons/instagram.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Instagram = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<InstagramSvg {...props} ref={ref} />);
});

Instagram.displayName = 'Instagram';

export default Instagram;

// export default () => <Instagram />;
        