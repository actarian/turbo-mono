
import React from 'react';
import TerminalSquareSvg from '../svg/terminal-square.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TerminalSquare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TerminalSquareSvg {...props} ref={ref} />);
});

TerminalSquare.displayName = 'TerminalSquare';

export default TerminalSquare;

// export default () => <TerminalSquare />;
        