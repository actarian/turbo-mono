
import React from 'react';
import GridSvg from '../svg/grid.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Grid = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GridSvg {...props} ref={ref} />);
});

Grid.displayName = 'Grid';

export default Grid;

// export default () => <Grid />;
        