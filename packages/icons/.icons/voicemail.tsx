
import React from 'react';
import VoicemailSvg from '../svg/voicemail.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Voicemail = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VoicemailSvg {...props} ref={ref} />);
});

Voicemail.displayName = 'Voicemail';

export default Voicemail;

// export default () => <Voicemail />;
        