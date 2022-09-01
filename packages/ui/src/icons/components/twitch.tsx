
import React from 'react';
import TwitchSvg from '../icons/twitch.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Twitch = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TwitchSvg {...props} ref={ref} />);
});

Twitch.displayName = 'Twitch';

export default Twitch;

// export default () => <Twitch />;
        