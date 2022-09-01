
import React from 'react';
import HeadphonesSvg from '../icons/headphones.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Headphones = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HeadphonesSvg {...props} ref={ref} />);
});

Headphones.displayName = 'Headphones';

export default Headphones;

// export default () => <Headphones />;
        