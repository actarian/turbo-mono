
import React from 'react';
import BugSvg from '../svg/bug.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bug = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BugSvg {...props} ref={ref} />);
});

Bug.displayName = 'Bug';

export default Bug;

// export default () => <Bug />;
        