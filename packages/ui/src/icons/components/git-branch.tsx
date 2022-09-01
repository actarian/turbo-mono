
import React from 'react';
import GitBranchSvg from '../icons/git-branch.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GitBranch = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitBranchSvg {...props} ref={ref} />);
});

GitBranch.displayName = 'GitBranch';

export default GitBranch;

// export default () => <GitBranch />;
        