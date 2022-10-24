
import React from 'react';
import PartyPopperSvg from '../svg/party-popper.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PartyPopper = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PartyPopperSvg {...props} ref={ref} />);
});

PartyPopper.displayName = 'PartyPopper';

export default PartyPopper;

// export default () => <PartyPopper />;
        