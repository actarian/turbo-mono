
import React from 'react';
import LoaderSvg from '../icons/loader.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loader = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LoaderSvg {...props} ref={ref} />);
});

Loader.displayName = 'Loader';

export default Loader;

// export default () => <Loader />;
        