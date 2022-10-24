
import React from 'react';
import CurlyBracesSvg from '../svg/curly-braces.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CurlyBraces = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CurlyBracesSvg {...props} ref={ref} />);
});

CurlyBraces.displayName = 'CurlyBraces';

export default CurlyBraces;

// export default () => <CurlyBraces />;
        