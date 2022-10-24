
import React from 'react';
import StrikethroughSvg from '../svg/strikethrough.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Strikethrough = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<StrikethroughSvg {...props} ref={ref} />);
});

Strikethrough.displayName = 'Strikethrough';

export default Strikethrough;

// export default () => <Strikethrough />;
        