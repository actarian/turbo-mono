
import React from 'react';
import RussianRubleSvg from '../svg/russian-ruble.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RussianRuble = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RussianRubleSvg {...props} ref={ref} />);
});

RussianRuble.displayName = 'RussianRuble';

export default RussianRuble;

// export default () => <RussianRuble />;
        