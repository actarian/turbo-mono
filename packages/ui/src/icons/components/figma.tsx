
import React from 'react';
import FigmaSvg from '../icons/figma.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Figma = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FigmaSvg {...props} ref={ref} />);
});

Figma.displayName = 'Figma';

export default Figma;

// export default () => <Figma />;
        