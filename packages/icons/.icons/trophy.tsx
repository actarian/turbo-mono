
import React from 'react';
import TrophySvg from '../svg/trophy.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Trophy = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TrophySvg {...props} ref={ref} />);
});

Trophy.displayName = 'Trophy';

export default Trophy;

// export default () => <Trophy />;
        