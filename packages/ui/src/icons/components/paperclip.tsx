
import React from 'react';
import PaperclipSvg from '../icons/paperclip.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Paperclip = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PaperclipSvg {...props} ref={ref} />);
});

Paperclip.displayName = 'Paperclip';

export default Paperclip;

// export default () => <Paperclip />;
        