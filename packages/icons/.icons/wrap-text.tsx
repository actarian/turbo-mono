
import React from 'react';
import WrapTextSvg from '../svg/wrap-text.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WrapText = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WrapTextSvg {...props} ref={ref} />);
});

WrapText.displayName = 'WrapText';

export default WrapText;

// export default () => <WrapText />;
        