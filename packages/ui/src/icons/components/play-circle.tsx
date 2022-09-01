
import React from 'react';
import PlayCircleSvg from '../icons/play-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PlayCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlayCircleSvg {...props} ref={ref} />);
});

PlayCircle.displayName = 'PlayCircle';

export default PlayCircle;

// export default () => <PlayCircle />;
        