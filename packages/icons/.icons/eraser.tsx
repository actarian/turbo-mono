
import React from 'react';
import EraserSvg from '../svg/eraser.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Eraser = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EraserSvg {...props} ref={ref} />);
});

Eraser.displayName = 'Eraser';

export default Eraser;

// export default () => <Eraser />;
        