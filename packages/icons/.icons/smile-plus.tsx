
import React from 'react';
import SmilePlusSvg from '../svg/smile-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SmilePlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SmilePlusSvg {...props} ref={ref} />);
});

SmilePlus.displayName = 'SmilePlus';

export default SmilePlus;

// export default () => <SmilePlus />;
        