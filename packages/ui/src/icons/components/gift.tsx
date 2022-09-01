
import React from 'react';
import GiftSvg from '../icons/gift.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Gift = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GiftSvg {...props} ref={ref} />);
});

Gift.displayName = 'Gift';

export default Gift;

// export default () => <Gift />;
        