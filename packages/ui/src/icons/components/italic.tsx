
import React from 'react';
import ItalicSvg from '../icons/italic.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Italic = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ItalicSvg {...props} ref={ref} />);
});

Italic.displayName = 'Italic';

export default Italic;

// export default () => <Italic />;
        