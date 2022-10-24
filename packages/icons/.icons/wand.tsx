
import React from 'react';
import WandSvg from '../svg/wand.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wand = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WandSvg {...props} ref={ref} />);
});

Wand.displayName = 'Wand';

export default Wand;

// export default () => <Wand />;
        