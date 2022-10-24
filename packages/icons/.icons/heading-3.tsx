
import React from 'react';
import Heading3Svg from '../svg/heading-3.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Heading3 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Heading3Svg {...props} ref={ref} />);
});

Heading3.displayName = 'Heading3';

export default Heading3;

// export default () => <Heading3 />;
        