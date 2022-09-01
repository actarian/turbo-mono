
import React from 'react';
import RepeatSvg from '../icons/repeat.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Repeat = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RepeatSvg {...props} ref={ref} />);
});

Repeat.displayName = 'Repeat';

export default Repeat;

// export default () => <Repeat />;
        