
import React from 'react';
import MedalSvg from '../svg/medal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Medal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MedalSvg {...props} ref={ref} />);
});

Medal.displayName = 'Medal';

export default Medal;

// export default () => <Medal />;
        