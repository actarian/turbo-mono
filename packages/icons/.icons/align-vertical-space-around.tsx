
import React from 'react';
import AlignVerticalSpaceAroundSvg from '../svg/align-vertical-space-around.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignVerticalSpaceAround = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignVerticalSpaceAroundSvg {...props} ref={ref} />);
});

AlignVerticalSpaceAround.displayName = 'AlignVerticalSpaceAround';

export default AlignVerticalSpaceAround;

// export default () => <AlignVerticalSpaceAround />;
        