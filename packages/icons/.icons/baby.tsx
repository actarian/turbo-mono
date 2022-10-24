
import React from 'react';
import BabySvg from '../svg/baby.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Baby = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BabySvg {...props} ref={ref} />);
});

Baby.displayName = 'Baby';

export default Baby;

// export default () => <Baby />;
        