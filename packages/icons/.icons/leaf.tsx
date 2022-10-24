
import React from 'react';
import LeafSvg from '../svg/leaf.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Leaf = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LeafSvg {...props} ref={ref} />);
});

Leaf.displayName = 'Leaf';

export default Leaf;

// export default () => <Leaf />;
        