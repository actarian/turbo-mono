
import React from 'react';
import BoldSvg from '../icons/bold.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bold = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BoldSvg {...props} ref={ref} />);
});

Bold.displayName = 'Bold';

export default Bold;

// export default () => <Bold />;
        