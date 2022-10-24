
import React from 'react';
import AlignHorizontalJustifyStartSvg from '../svg/align-horizontal-justify-start.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignHorizontalJustifyStart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignHorizontalJustifyStartSvg {...props} ref={ref} />);
});

AlignHorizontalJustifyStart.displayName = 'AlignHorizontalJustifyStart';

export default AlignHorizontalJustifyStart;

// export default () => <AlignHorizontalJustifyStart />;
        