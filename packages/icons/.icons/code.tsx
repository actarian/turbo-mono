
import React from 'react';
import CodeSvg from '../svg/code.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Code = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CodeSvg {...props} ref={ref} />);
});

Code.displayName = 'Code';

export default Code;

// export default () => <Code />;
        