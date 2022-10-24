
import React from 'react';
import SirenSvg from '../svg/siren.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Siren = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SirenSvg {...props} ref={ref} />);
});

Siren.displayName = 'Siren';

export default Siren;

// export default () => <Siren />;
        