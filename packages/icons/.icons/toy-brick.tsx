
import React from 'react';
import ToyBrickSvg from '../svg/toy-brick.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToyBrick = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ToyBrickSvg {...props} ref={ref} />);
});

ToyBrick.displayName = 'ToyBrick';

export default ToyBrick;

// export default () => <ToyBrick />;
        