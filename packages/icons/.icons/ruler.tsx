
import React from 'react';
import RulerSvg from '../svg/ruler.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Ruler = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RulerSvg {...props} ref={ref} />);
});

Ruler.displayName = 'Ruler';

export default Ruler;

// export default () => <Ruler />;
        