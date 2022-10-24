
import React from 'react';
import Tv2Svg from '../svg/tv-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tv2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Tv2Svg {...props} ref={ref} />);
});

Tv2.displayName = 'Tv2';

export default Tv2;

// export default () => <Tv2 />;
        