
import React from 'react';
import ReplyAllSvg from '../svg/reply-all.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReplyAll = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ReplyAllSvg {...props} ref={ref} />);
});

ReplyAll.displayName = 'ReplyAll';

export default ReplyAll;

// export default () => <ReplyAll />;
        