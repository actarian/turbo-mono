
import React from 'react';
import AwardSvg from '../icons/award.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Award = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AwardSvg {...props} ref={ref} />);
});

Award.displayName = 'Award';

export default Award;

// export default () => <Award />;
        