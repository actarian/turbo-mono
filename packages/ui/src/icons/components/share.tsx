
import React from 'react';
import ShareSvg from '../icons/share.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Share = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShareSvg {...props} ref={ref} />);
});

Share.displayName = 'Share';

export default Share;

// export default () => <Share />;
        