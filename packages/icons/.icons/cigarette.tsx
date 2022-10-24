
import React from 'react';
import CigaretteSvg from '../svg/cigarette.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cigarette = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CigaretteSvg {...props} ref={ref} />);
});

Cigarette.displayName = 'Cigarette';

export default Cigarette;

// export default () => <Cigarette />;
        