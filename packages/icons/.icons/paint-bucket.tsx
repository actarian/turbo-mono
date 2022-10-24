
import React from 'react';
import PaintBucketSvg from '../svg/paint-bucket.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaintBucket = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PaintBucketSvg {...props} ref={ref} />);
});

PaintBucket.displayName = 'PaintBucket';

export default PaintBucket;

// export default () => <PaintBucket />;
        