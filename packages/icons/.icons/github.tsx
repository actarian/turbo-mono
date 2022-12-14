
import React from 'react';
import GithubSvg from '../svg/github.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Github = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GithubSvg {...props} ref={ref} />);
});

Github.displayName = 'Github';
