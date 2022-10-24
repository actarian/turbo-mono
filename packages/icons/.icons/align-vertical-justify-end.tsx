
import React from 'react';
import AlignVerticalJustifyEndSvg from '../svg/align-vertical-justify-end.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignVerticalJustifyEnd = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignVerticalJustifyEndSvg {...props} ref={ref} />);
});

AlignVerticalJustifyEnd.displayName = 'AlignVerticalJustifyEnd';

export default AlignVerticalJustifyEnd;

// export default () => <AlignVerticalJustifyEnd />;
        