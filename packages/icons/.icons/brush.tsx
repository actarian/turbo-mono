
import React from 'react';
import BrushSvg from '../svg/brush.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Brush = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BrushSvg {...props} ref={ref} />);
});

Brush.displayName = 'Brush';

export default Brush;

// export default () => <Brush />;
        