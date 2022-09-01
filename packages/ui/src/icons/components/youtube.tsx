
import React from 'react';
import YoutubeSvg from '../icons/youtube.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Youtube = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<YoutubeSvg {...props} ref={ref} />);
});

Youtube.displayName = 'Youtube';

export default Youtube;

// export default () => <Youtube />;
        