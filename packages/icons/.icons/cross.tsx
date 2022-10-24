
import React from 'react';
import CrossSvg from '../svg/cross.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cross = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CrossSvg {...props} ref={ref} />);
});

Cross.displayName = 'Cross';

export default Cross;

// export default () => <Cross />;
        