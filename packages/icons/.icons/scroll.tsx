
import React from 'react';
import ScrollSvg from '../svg/scroll.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Scroll = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ScrollSvg {...props} ref={ref} />);
});

Scroll.displayName = 'Scroll';

export default Scroll;

// export default () => <Scroll />;
        