
import React from 'react';
import Globe2Svg from '../svg/globe-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Globe2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Globe2Svg {...props} ref={ref} />);
});

Globe2.displayName = 'Globe2';

export default Globe2;

// export default () => <Globe2 />;
        