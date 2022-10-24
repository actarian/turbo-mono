
import React from 'react';
import CroissantSvg from '../svg/croissant.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Croissant = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CroissantSvg {...props} ref={ref} />);
});

Croissant.displayName = 'Croissant';

export default Croissant;

// export default () => <Croissant />;
        