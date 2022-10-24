
import React from 'react';
import ReplySvg from '../svg/reply.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Reply = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ReplySvg {...props} ref={ref} />);
});

Reply.displayName = 'Reply';

export default Reply;

// export default () => <Reply />;
        