
import React from 'react';
import LayoutGridSvg from '../svg/layout-grid.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LayoutGrid = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LayoutGridSvg {...props} ref={ref} />);
});

LayoutGrid.displayName = 'LayoutGrid';

export default LayoutGrid;

// export default () => <LayoutGrid />;
        