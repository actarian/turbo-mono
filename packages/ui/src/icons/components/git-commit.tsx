
import React from 'react';
import GitCommitSvg from '../icons/git-commit.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GitCommit = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitCommitSvg {...props} ref={ref} />);
});

GitCommit.displayName = 'GitCommit';

export default GitCommit;

// export default () => <GitCommit />;
        