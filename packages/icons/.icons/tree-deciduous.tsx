
import React from 'react';
import TreeDeciduousSvg from '../svg/tree-deciduous.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TreeDeciduous = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TreeDeciduousSvg {...props} ref={ref} />);
});

TreeDeciduous.displayName = 'TreeDeciduous';

export default TreeDeciduous;

// export default () => <TreeDeciduous />;
        