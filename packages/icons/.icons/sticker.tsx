
import React from 'react';
import StickerSvg from '../svg/sticker.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sticker = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<StickerSvg {...props} ref={ref} />);
});

Sticker.displayName = 'Sticker';

export default Sticker;

// export default () => <Sticker />;
        