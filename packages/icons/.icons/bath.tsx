
import React from 'react';
import BathSvg from '../svg/bath.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bath = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BathSvg {...props} ref={ref} />);
});

Bath.displayName = 'Bath';

export default Bath;

// export default () => <Bath />;
        