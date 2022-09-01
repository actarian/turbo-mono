
import React from 'react';
import AtSignSvg from '../icons/at-sign.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AtSign = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AtSignSvg {...props} ref={ref} />);
});

AtSign.displayName = 'AtSign';

export default AtSign;

// export default () => <AtSign />;
        