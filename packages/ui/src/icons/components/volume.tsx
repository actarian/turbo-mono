
import React from 'react';
import VolumeSvg from '../icons/volume.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Volume = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VolumeSvg {...props} ref={ref} />);
});

Volume.displayName = 'Volume';

export default Volume;

// export default () => <Volume />;
        