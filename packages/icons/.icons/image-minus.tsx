
import React from 'react';
import ImageMinusSvg from '../svg/image-minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ImageMinusSvg {...props} ref={ref} />);
});

ImageMinus.displayName = 'ImageMinus';

export default ImageMinus;

// export default () => <ImageMinus />;
        