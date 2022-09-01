
import React from 'react';
import MessageSquareSvg from '../icons/message-square.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MessageSquare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MessageSquareSvg {...props} ref={ref} />);
});

MessageSquare.displayName = 'MessageSquare';

export default MessageSquare;

// export default () => <MessageSquare />;
        