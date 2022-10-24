
import React from 'react';
import HistorySvg from '../svg/history.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const History = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HistorySvg {...props} ref={ref} />);
});

History.displayName = 'History';

export default History;

// export default () => <History />;
        