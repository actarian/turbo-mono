
import React from 'react';
import Wand2Svg from '../svg/wand-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wand2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Wand2Svg {...props} ref={ref} />);
});

Wand2.displayName = 'Wand2';

export default Wand2;

// export default () => <Wand2 />;
        