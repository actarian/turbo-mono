
import React from 'react';
import FileClockSvg from '../svg/file-clock.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileClock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileClockSvg {...props} ref={ref} />);
});

FileClock.displayName = 'FileClock';

export default FileClock;

// export default () => <FileClock />;
        