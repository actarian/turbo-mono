
import React from 'react';
import ShuffleSvg from '../icons/shuffle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Shuffle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShuffleSvg {...props} ref={ref} />);
});

Shuffle.displayName = 'Shuffle';

export default Shuffle;

// export default () => <Shuffle />;
        