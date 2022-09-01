
import React from 'react';
import LinkedinSvg from '../icons/linkedin.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Linkedin = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LinkedinSvg {...props} ref={ref} />);
});

Linkedin.displayName = 'Linkedin';

export default Linkedin;

// export default () => <Linkedin />;
        