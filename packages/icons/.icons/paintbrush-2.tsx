
import React from 'react';
import Paintbrush2Svg from '../svg/paintbrush-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Paintbrush2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Paintbrush2Svg {...props} ref={ref} />);
});

Paintbrush2.displayName = 'Paintbrush2';

export default Paintbrush2;

// export default () => <Paintbrush2 />;
        