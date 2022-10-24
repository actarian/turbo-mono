
import React from 'react';
import SeparatorHorizontalSvg from '../svg/separator-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SeparatorHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SeparatorHorizontalSvg {...props} ref={ref} />);
});

SeparatorHorizontal.displayName = 'SeparatorHorizontal';

export default SeparatorHorizontal;

// export default () => <SeparatorHorizontal />;
        