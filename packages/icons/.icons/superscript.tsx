
import React from 'react';
import SuperscriptSvg from '../svg/superscript.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Superscript = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SuperscriptSvg {...props} ref={ref} />);
});

Superscript.displayName = 'Superscript';

export default Superscript;

// export default () => <Superscript />;
        