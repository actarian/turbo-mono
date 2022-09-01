
import React from 'react';
import TrelloSvg from '../icons/trello.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Trello = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TrelloSvg {...props} ref={ref} />);
});

Trello.displayName = 'Trello';

export default Trello;

// export default () => <Trello />;
        