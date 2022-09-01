
import React from 'react';
import SlackSvg from '../icons/slack.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slack = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SlackSvg {...props} ref={ref} />);
});

Slack.displayName = 'Slack';

export default Slack;

// export default () => <Slack />;
        