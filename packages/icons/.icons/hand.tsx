
import React from 'react';
import HandSvg from '../svg/hand.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hand = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HandSvg {...props} ref={ref} />);
});

Hand.displayName = 'Hand';

export default Hand;

// export default () => <Hand />;
        