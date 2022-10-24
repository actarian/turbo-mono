
import React from 'react';
import ContrastSvg from '../svg/contrast.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Contrast = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ContrastSvg {...props} ref={ref} />);
});

Contrast.displayName = 'Contrast';

export default Contrast;

// export default () => <Contrast />;
        