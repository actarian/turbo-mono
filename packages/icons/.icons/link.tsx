
import React from 'react';
import LinkSvg from '../svg/link.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LinkSvg {...props} ref={ref} />);
});

Link.displayName = 'Link';

export default Link;

// export default () => <Link />;
        