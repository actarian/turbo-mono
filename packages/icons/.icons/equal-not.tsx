
import React from 'react';
import EqualNotSvg from '../svg/equal-not.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EqualNot = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EqualNotSvg {...props} ref={ref} />);
});

EqualNot.displayName = 'EqualNot';

export default EqualNot;

// export default () => <EqualNot />;
        