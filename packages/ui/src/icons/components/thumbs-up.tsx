
import React from 'react';
import ThumbsUpSvg from '../icons/thumbs-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThumbsUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ThumbsUpSvg {...props} ref={ref} />);
});

ThumbsUp.displayName = 'ThumbsUp';

export default ThumbsUp;

// export default () => <ThumbsUp />;
        