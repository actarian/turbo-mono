
import React from 'react';
import SwordsSvg from '../svg/swords.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Swords = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SwordsSvg {...props} ref={ref} />);
});

Swords.displayName = 'Swords';

export default Swords;

// export default () => <Swords />;
        