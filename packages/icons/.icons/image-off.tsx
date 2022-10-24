
import React from 'react';
import ImageOffSvg from '../svg/image-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ImageOffSvg {...props} ref={ref} />);
});

ImageOff.displayName = 'ImageOff';

export default ImageOff;

// export default () => <ImageOff />;
        