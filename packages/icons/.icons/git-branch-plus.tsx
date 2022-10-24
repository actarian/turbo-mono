
import React from 'react';
import GitBranchPlusSvg from '../svg/git-branch-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GitBranchPlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitBranchPlusSvg {...props} ref={ref} />);
});

GitBranchPlus.displayName = 'GitBranchPlus';

export default GitBranchPlus;

// export default () => <GitBranchPlus />;
        