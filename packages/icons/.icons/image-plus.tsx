
import React from 'react';
import ImagePlusSvg from '../svg/image-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImagePlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ImagePlusSvg {...props} ref={ref} />);
});

ImagePlus.displayName = 'ImagePlus';

export default ImagePlus;

// export default () => <ImagePlus />;
        