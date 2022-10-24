
import React from 'react';
import TreePineSvg from '../svg/tree-pine.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TreePine = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TreePineSvg {...props} ref={ref} />);
});

TreePine.displayName = 'TreePine';

export default TreePine;

// export default () => <TreePine />;
        