
import React from 'react';
import DiffSvg from '../svg/diff.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Diff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DiffSvg {...props} ref={ref} />);
});

Diff.displayName = 'Diff';

export default Diff;

// export default () => <Diff />;
        