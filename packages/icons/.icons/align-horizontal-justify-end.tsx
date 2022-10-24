
import React from 'react';
import AlignHorizontalJustifyEndSvg from '../svg/align-horizontal-justify-end.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignHorizontalJustifyEnd = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignHorizontalJustifyEndSvg {...props} ref={ref} />);
});

AlignHorizontalJustifyEnd.displayName = 'AlignHorizontalJustifyEnd';

export default AlignHorizontalJustifyEnd;

// export default () => <AlignHorizontalJustifyEnd />;
        