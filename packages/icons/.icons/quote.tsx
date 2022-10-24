
import React from 'react';
import QuoteSvg from '../svg/quote.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Quote = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<QuoteSvg {...props} ref={ref} />);
});

Quote.displayName = 'Quote';

export default Quote;

// export default () => <Quote />;
        