
import React from 'react';
import GitPullRequestClosedSvg from '../svg/git-pull-request-closed.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GitPullRequestClosed = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitPullRequestClosedSvg {...props} ref={ref} />);
});

GitPullRequestClosed.displayName = 'GitPullRequestClosed';

export default GitPullRequestClosed;

// export default () => <GitPullRequestClosed />;
        