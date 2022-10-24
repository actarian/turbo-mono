
import React from 'react';
import SeparatorVerticalSvg from '../svg/separator-vertical.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SeparatorVertical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SeparatorVerticalSvg {...props} ref={ref} />);
});

SeparatorVertical.displayName = 'SeparatorVertical';

export default SeparatorVertical;

// export default () => <SeparatorVertical />;
        