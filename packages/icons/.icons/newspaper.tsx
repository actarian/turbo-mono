
import React from 'react';
import NewspaperSvg from '../svg/newspaper.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Newspaper = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<NewspaperSvg {...props} ref={ref} />);
});

Newspaper.displayName = 'Newspaper';

export default Newspaper;

// export default () => <Newspaper />;
        