
import React from 'react';
import BoxesSvg from '../svg/boxes.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Boxes = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BoxesSvg {...props} ref={ref} />);
});

Boxes.displayName = 'Boxes';

export default Boxes;

// export default () => <Boxes />;
        