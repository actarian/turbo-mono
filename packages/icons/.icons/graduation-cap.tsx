
import React from 'react';
import GraduationCapSvg from '../svg/graduation-cap.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GraduationCap = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GraduationCapSvg {...props} ref={ref} />);
});

GraduationCap.displayName = 'GraduationCap';

export default GraduationCap;

// export default () => <GraduationCap />;
        