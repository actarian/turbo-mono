
import React from 'react';
import AlignHorizontalSpaceBetweenSvg from '../svg/align-horizontal-space-between.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignHorizontalSpaceBetween = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignHorizontalSpaceBetweenSvg {...props} ref={ref} />);
});

AlignHorizontalSpaceBetween.displayName = 'AlignHorizontalSpaceBetween';

export default AlignHorizontalSpaceBetween;

// export default () => <AlignHorizontalSpaceBetween />;
        