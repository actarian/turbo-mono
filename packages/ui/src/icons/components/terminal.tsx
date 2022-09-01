
import React from 'react';
import TerminalSvg from '../icons/terminal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Terminal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TerminalSvg {...props} ref={ref} />);
});

Terminal.displayName = 'Terminal';

export default Terminal;

// export default () => <Terminal />;
        