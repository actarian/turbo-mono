
import React from 'react';
import SkipBackSvg from '../icons/skip-back.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SkipBack = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SkipBackSvg {...props} ref={ref} />);
});

SkipBack.displayName = 'SkipBack';

export default SkipBack;

// export default () => <SkipBack />;
        