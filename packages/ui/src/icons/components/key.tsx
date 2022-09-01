
import React from 'react';
import KeySvg from '../icons/key.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Key = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<KeySvg {...props} ref={ref} />);
});

Key.displayName = 'Key';

export default Key;

// export default () => <Key />;
        