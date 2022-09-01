
import React from 'react';
import GitMergeSvg from '../icons/git-merge.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GitMerge = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitMergeSvg {...props} ref={ref} />);
});

GitMerge.displayName = 'GitMerge';

export default GitMerge;

// export default () => <GitMerge />;
        