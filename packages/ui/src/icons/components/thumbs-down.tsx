
import React from 'react';
import ThumbsDownSvg from '../icons/thumbs-down.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThumbsDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ThumbsDownSvg {...props} ref={ref} />);
});

ThumbsDown.displayName = 'ThumbsDown';

export default ThumbsDown;

// export default () => <ThumbsDown />;
        