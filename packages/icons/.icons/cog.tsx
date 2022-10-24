
import React from 'react';
import CogSvg from '../svg/cog.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cog = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CogSvg {...props} ref={ref} />);
});

Cog.displayName = 'Cog';

export default Cog;

// export default () => <Cog />;
        