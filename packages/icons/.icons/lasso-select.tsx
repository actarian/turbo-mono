
import React from 'react';
import LassoSelectSvg from '../svg/lasso-select.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LassoSelect = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LassoSelectSvg {...props} ref={ref} />);
});

LassoSelect.displayName = 'LassoSelect';

export default LassoSelect;

// export default () => <LassoSelect />;
        