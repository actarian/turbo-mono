
import React from 'react';
import SheetSvg from '../svg/sheet.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sheet = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SheetSvg {...props} ref={ref} />);
});

Sheet.displayName = 'Sheet';

export default Sheet;

// export default () => <Sheet />;
        