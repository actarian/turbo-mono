
import React from 'react';
import CherrySvg from '../svg/cherry.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cherry = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CherrySvg {...props} ref={ref} />);
});

Cherry.displayName = 'Cherry';

export default Cherry;

// export default () => <Cherry />;
        