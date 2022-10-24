
import React from 'react';
import BoxSelectSvg from '../svg/box-select.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BoxSelect = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BoxSelectSvg {...props} ref={ref} />);
});

BoxSelect.displayName = 'BoxSelect';

export default BoxSelect;

// export default () => <BoxSelect />;
        