
import React from 'react';
import PrinterSvg from '../icons/printer.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Printer = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PrinterSvg {...props} ref={ref} />);
});

Printer.displayName = 'Printer';

export default Printer;

// export default () => <Printer />;
        