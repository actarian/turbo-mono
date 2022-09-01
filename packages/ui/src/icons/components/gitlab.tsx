
import React from 'react';
import GitlabSvg from '../icons/gitlab.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Gitlab = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitlabSvg {...props} ref={ref} />);
});

Gitlab.displayName = 'Gitlab';

export default Gitlab;

// export default () => <Gitlab />;
        