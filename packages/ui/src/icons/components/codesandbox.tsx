
import React from 'react';
import CodesandboxSvg from '../icons/codesandbox.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Codesandbox = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CodesandboxSvg {...props} ref={ref} />);
});

Codesandbox.displayName = 'Codesandbox';

export default Codesandbox;

// export default () => <Codesandbox />;
        