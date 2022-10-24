
import React from 'react';
import PaletteSvg from '../svg/palette.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Palette = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PaletteSvg {...props} ref={ref} />);
});

Palette.displayName = 'Palette';

export default Palette;

// export default () => <Palette />;
        