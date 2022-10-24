
import React from 'react';
import DiamondSvg from '../svg/diamond.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Diamond = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DiamondSvg {...props} ref={ref} />);
});

Diamond.displayName = 'Diamond';

export default Diamond;

// export default () => <Diamond />;
        