
import React from 'react';
import Code2Svg from '../svg/code-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Code2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Code2Svg {...props} ref={ref} />);
});

Code2.displayName = 'Code2';

export default Code2;

// export default () => <Code2 />;
        