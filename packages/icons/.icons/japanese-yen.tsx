
import React from 'react';
import JapaneseYenSvg from '../svg/japanese-yen.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const JapaneseYen = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<JapaneseYenSvg {...props} ref={ref} />);
});

JapaneseYen.displayName = 'JapaneseYen';

export default JapaneseYen;

// export default () => <JapaneseYen />;
        