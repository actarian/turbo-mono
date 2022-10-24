
import React from 'react';
import RegexSvg from '../svg/regex.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Regex = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RegexSvg {...props} ref={ref} />);
});

Regex.displayName = 'Regex';

export default Regex;

// export default () => <Regex />;
        