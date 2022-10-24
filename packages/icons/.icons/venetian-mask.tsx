
import React from 'react';
import VenetianMaskSvg from '../svg/venetian-mask.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VenetianMask = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VenetianMaskSvg {...props} ref={ref} />);
});

VenetianMask.displayName = 'VenetianMask';

export default VenetianMask;

// export default () => <VenetianMask />;
        