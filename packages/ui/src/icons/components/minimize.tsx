
import React from 'react';
import MinimizeSvg from '../icons/minimize.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Minimize = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MinimizeSvg {...props} ref={ref} />);
});

Minimize.displayName = 'Minimize';

export default Minimize;

// export default () => <Minimize />;
        