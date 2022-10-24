
import React from 'react';
import IndentSvg from '../svg/indent.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Indent = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<IndentSvg {...props} ref={ref} />);
});

Indent.displayName = 'Indent';

export default Indent;

// export default () => <Indent />;
        