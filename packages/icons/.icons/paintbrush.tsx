
import React from 'react';
import PaintbrushSvg from '../svg/paintbrush.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Paintbrush = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PaintbrushSvg {...props} ref={ref} />);
});

Paintbrush.displayName = 'Paintbrush';

export default Paintbrush;

// export default () => <Paintbrush />;
        