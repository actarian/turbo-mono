
import React from 'react';
import AlignVerticalJustifyCenterSvg from '../svg/align-vertical-justify-center.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignVerticalJustifyCenter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignVerticalJustifyCenterSvg {...props} ref={ref} />);
});

AlignVerticalJustifyCenter.displayName = 'AlignVerticalJustifyCenter';

export default AlignVerticalJustifyCenter;

// export default () => <AlignVerticalJustifyCenter />;
        