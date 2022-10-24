
import React from 'react';
import OptionSvg from '../svg/option.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Option = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<OptionSvg {...props} ref={ref} />);
});

Option.displayName = 'Option';

export default Option;

// export default () => <Option />;
        