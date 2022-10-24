
import React from 'react';
import GlassesSvg from '../svg/glasses.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Glasses = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GlassesSvg {...props} ref={ref} />);
});

Glasses.displayName = 'Glasses';

export default Glasses;

// export default () => <Glasses />;
        