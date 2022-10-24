
import React from 'react';
import LaughSvg from '../svg/laugh.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Laugh = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LaughSvg {...props} ref={ref} />);
});

Laugh.displayName = 'Laugh';

export default Laugh;

// export default () => <Laugh />;
        