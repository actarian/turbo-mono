
import React from 'react';
import MonitorSpeakerSvg from '../svg/monitor-speaker.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MonitorSpeaker = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MonitorSpeakerSvg {...props} ref={ref} />);
});

MonitorSpeaker.displayName = 'MonitorSpeaker';

export default MonitorSpeaker;

// export default () => <MonitorSpeaker />;
        