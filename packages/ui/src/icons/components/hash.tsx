
import React from 'react';
import HashSvg from '../icons/hash.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hash = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HashSvg {...props} ref={ref} />);
});

Hash.displayName = 'Hash';

export default Hash;

// export default () => <Hash />;
        