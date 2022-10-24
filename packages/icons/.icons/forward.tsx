
import React from 'react';
import ForwardSvg from '../svg/forward.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Forward = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ForwardSvg {...props} ref={ref} />);
});

Forward.displayName = 'Forward';

export default Forward;

// export default () => <Forward />;
        