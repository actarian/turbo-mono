
import React from 'react';
import WineSvg from '../svg/wine.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wine = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WineSvg {...props} ref={ref} />);
});

Wine.displayName = 'Wine';

export default Wine;

// export default () => <Wine />;
        