
import React from 'react';
import CookieSvg from '../svg/cookie.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cookie = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CookieSvg {...props} ref={ref} />);
});

Cookie.displayName = 'Cookie';

export default Cookie;

// export default () => <Cookie />;
        