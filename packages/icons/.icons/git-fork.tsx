
import React from 'react';
import GitForkSvg from '../svg/git-fork.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GitFork = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitForkSvg {...props} ref={ref} />);
});

GitFork.displayName = 'GitFork';

export default GitFork;

// export default () => <GitFork />;
        