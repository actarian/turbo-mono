
import React from 'react';
import ImageSvg from '../icons/image.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Image = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ImageSvg {...props} ref={ref} />);
});

Image.displayName = 'Image';

export default Image;

// export default () => <Image />;
        