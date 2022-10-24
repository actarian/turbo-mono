
import React from 'react';
import AlignVerticalSpaceBetweenSvg from '../svg/align-vertical-space-between.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignVerticalSpaceBetween = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignVerticalSpaceBetweenSvg {...props} ref={ref} />);
});

AlignVerticalSpaceBetween.displayName = 'AlignVerticalSpaceBetween';

export default AlignVerticalSpaceBetween;

// export default () => <AlignVerticalSpaceBetween />;
        