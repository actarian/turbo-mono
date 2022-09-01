
import React from 'react';
import UnderlineSvg from '../icons/underline.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Underline = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UnderlineSvg {...props} ref={ref} />);
});

Underline.displayName = 'Underline';

export default Underline;

// export default () => <Underline />;
        