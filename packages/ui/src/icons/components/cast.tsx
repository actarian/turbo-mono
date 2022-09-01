
import React from 'react';
import CastSvg from '../icons/cast.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cast = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CastSvg {...props} ref={ref} />);
});

Cast.displayName = 'Cast';

export default Cast;

// export default () => <Cast />;
        