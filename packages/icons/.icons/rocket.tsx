
import React from 'react';
import RocketSvg from '../svg/rocket.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Rocket = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RocketSvg {...props} ref={ref} />);
});

Rocket.displayName = 'Rocket';

export default Rocket;

// export default () => <Rocket />;
        