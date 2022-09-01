
import React from 'react';
import TvSvg from '../icons/tv.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tv = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TvSvg {...props} ref={ref} />);
});

Tv.displayName = 'Tv';

export default Tv;

// export default () => <Tv />;
        