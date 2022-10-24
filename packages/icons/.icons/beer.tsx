
import React from 'react';
import BeerSvg from '../svg/beer.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Beer = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BeerSvg {...props} ref={ref} />);
});

Beer.displayName = 'Beer';

export default Beer;

// export default () => <Beer />;
        