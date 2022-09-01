
import React from 'react';
import IconLinkSvg from '../icons/icon-link.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconLink = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<IconLinkSvg {...props} ref={ref} />);
});

IconLink.displayName = 'IconLink';

export default IconLink;

// export default () => <IconLink />;
        