
import React from 'react';
import GlobeSvg from '../svg/globe.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Globe = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GlobeSvg {...props} ref={ref} />);
});

Globe.displayName = 'Globe';

export default Globe;

// export default () => <Globe />;
        