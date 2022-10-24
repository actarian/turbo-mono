
import React from 'react';
import GemSvg from '../svg/gem.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Gem = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GemSvg {...props} ref={ref} />);
});

Gem.displayName = 'Gem';

export default Gem;

// export default () => <Gem />;
        