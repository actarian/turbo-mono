
import React from 'react';
import TicketSvg from '../svg/ticket.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Ticket = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TicketSvg {...props} ref={ref} />);
});

Ticket.displayName = 'Ticket';

export default Ticket;

// export default () => <Ticket />;
        