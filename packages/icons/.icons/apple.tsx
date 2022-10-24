
import React from 'react';
import AppleSvg from '../svg/apple.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Apple = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AppleSvg {...props} ref={ref} />);
});

Apple.displayName = 'Apple';

export default Apple;

// export default () => <Apple />;
        