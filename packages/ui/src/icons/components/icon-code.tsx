
import React from 'react';
import IconCodeSvg from '../icons/icon-code.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconCode = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<IconCodeSvg {...props} ref={ref} />);
});

IconCode.displayName = 'IconCode';

export default IconCode;

// export default () => <IconCode />;
        