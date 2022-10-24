
import React from 'react';
import FocusSvg from '../svg/focus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Focus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FocusSvg {...props} ref={ref} />);
});

Focus.displayName = 'Focus';

export default Focus;

// export default () => <Focus />;
        