
import React from 'react';
import ChevronsUpDownSvg from '../svg/chevrons-up-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChevronsUpDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsUpDownSvg {...props} ref={ref} />);
});

ChevronsUpDown.displayName = 'ChevronsUpDown';

export default ChevronsUpDown;

// export default () => <ChevronsUpDown />;
        