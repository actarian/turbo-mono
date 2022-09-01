
import React from 'react';
import IconLayoutSvg from '../icons/icon-layout.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconLayout = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<IconLayoutSvg {...props} ref={ref} />);
});

IconLayout.displayName = 'IconLayout';

export default IconLayout;

// export default () => <IconLayout />;
        