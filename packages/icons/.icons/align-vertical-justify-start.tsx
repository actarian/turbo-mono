
import React from 'react';
import AlignVerticalJustifyStartSvg from '../svg/align-vertical-justify-start.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignVerticalJustifyStart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignVerticalJustifyStartSvg {...props} ref={ref} />);
});

AlignVerticalJustifyStart.displayName = 'AlignVerticalJustifyStart';

export default AlignVerticalJustifyStart;

// export default () => <AlignVerticalJustifyStart />;
        