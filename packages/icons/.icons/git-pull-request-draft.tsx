
import React from 'react';
import GitPullRequestDraftSvg from '../svg/git-pull-request-draft.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GitPullRequestDraft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitPullRequestDraftSvg {...props} ref={ref} />);
});

GitPullRequestDraft.displayName = 'GitPullRequestDraft';

export default GitPullRequestDraft;

// export default () => <GitPullRequestDraft />;
        