
import React from 'react';
import AngrySvg from '../svg/angry.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Angry = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AngrySvg {...props} ref={ref} />);
});

Angry.displayName = 'Angry';

export default Angry;

// export default () => <Angry />;
        