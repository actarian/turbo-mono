
import React from 'react';
import GitCompareSvg from '../svg/git-compare.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GitCompare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitCompareSvg {...props} ref={ref} />);
});

GitCompare.displayName = 'GitCompare';

export default GitCompare;

// export default () => <GitCompare />;
        