
import React from 'react';
import TwitterSvg from '../svg/twitter.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Twitter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TwitterSvg {...props} ref={ref} />);
});

Twitter.displayName = 'Twitter';

export default Twitter;

// export default () => <Twitter />;
        