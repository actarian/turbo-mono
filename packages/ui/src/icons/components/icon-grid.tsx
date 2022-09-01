
import React from 'react';
import IconGridSvg from '../icons/icon-grid.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconGrid = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<IconGridSvg {...props} ref={ref} />);
});

IconGrid.displayName = 'IconGrid';

export default IconGrid;

// export default () => <IconGrid />;
        