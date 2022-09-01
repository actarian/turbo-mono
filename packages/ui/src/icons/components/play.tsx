
import React from 'react';
import PlaySvg from '../icons/play.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Play = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlaySvg {...props} ref={ref} />);
});

Play.displayName = 'Play';

export default Play;

// export default () => <Play />;
        