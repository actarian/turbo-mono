
import React from 'react';
import Heading4Svg from '../svg/heading-4.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Heading4 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Heading4Svg {...props} ref={ref} />);
});

Heading4.displayName = 'Heading4';

export default Heading4;

// export default () => <Heading4 />;
        