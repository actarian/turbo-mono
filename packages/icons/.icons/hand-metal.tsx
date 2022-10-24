
import React from 'react';
import HandMetalSvg from '../svg/hand-metal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HandMetal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HandMetalSvg {...props} ref={ref} />);
});

HandMetal.displayName = 'HandMetal';

export default HandMetal;

// export default () => <HandMetal />;
        