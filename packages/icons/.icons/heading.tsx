
import React from 'react';
import HeadingSvg from '../svg/heading.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Heading = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HeadingSvg {...props} ref={ref} />);
});

Heading.displayName = 'Heading';

export default Heading;

// export default () => <Heading />;
        