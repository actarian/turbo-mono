
import React from 'react';
import Heading6Svg from '../svg/heading-6.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Heading6 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Heading6Svg {...props} ref={ref} />);
});

Heading6.displayName = 'Heading6';

export default Heading6;

// export default () => <Heading6 />;
        