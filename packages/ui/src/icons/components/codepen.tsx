
import React from 'react';
import CodepenSvg from '../icons/codepen.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Codepen = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CodepenSvg {...props} ref={ref} />);
});

Codepen.displayName = 'Codepen';

export default Codepen;

// export default () => <Codepen />;
        