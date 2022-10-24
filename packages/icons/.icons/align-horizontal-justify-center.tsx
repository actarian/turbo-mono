
import React from 'react';
import AlignHorizontalJustifyCenterSvg from '../svg/align-horizontal-justify-center.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignHorizontalJustifyCenter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignHorizontalJustifyCenterSvg {...props} ref={ref} />);
});

AlignHorizontalJustifyCenter.displayName = 'AlignHorizontalJustifyCenter';

export default AlignHorizontalJustifyCenter;

// export default () => <AlignHorizontalJustifyCenter />;
        