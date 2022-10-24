
import React from 'react';
import LibrarySvg from '../svg/library.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Library = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LibrarySvg {...props} ref={ref} />);
});

Library.displayName = 'Library';

export default Library;

// export default () => <Library />;
        