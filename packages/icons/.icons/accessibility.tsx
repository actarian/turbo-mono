
import React from 'react';
import AccessibilitySvg from '../svg/accessibility.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Accessibility = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AccessibilitySvg {...props} ref={ref} />);
});

Accessibility.displayName = 'Accessibility';

export default Accessibility;

// export default () => <Accessibility />;
        