
import React from 'react';
import AlignHorizontalSpaceAroundSvg from '../svg/align-horizontal-space-around.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignHorizontalSpaceAround = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignHorizontalSpaceAroundSvg {...props} ref={ref} />);
});

AlignHorizontalSpaceAround.displayName = 'AlignHorizontalSpaceAround';

export default AlignHorizontalSpaceAround;

// export default () => <AlignHorizontalSpaceAround />;
        