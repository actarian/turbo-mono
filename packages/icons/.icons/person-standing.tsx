
import React from 'react';
import PersonStandingSvg from '../svg/person-standing.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PersonStanding = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PersonStandingSvg {...props} ref={ref} />);
});

PersonStanding.displayName = 'PersonStanding';

export default PersonStanding;

// export default () => <PersonStanding />;
        