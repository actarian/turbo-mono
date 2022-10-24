
import React from 'react';
import TreesSvg from '../svg/trees.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Trees = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TreesSvg {...props} ref={ref} />);
});

Trees.displayName = 'Trees';

export default Trees;

// export default () => <Trees />;
        