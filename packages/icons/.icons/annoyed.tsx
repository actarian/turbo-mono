
import React from 'react';
import AnnoyedSvg from '../svg/annoyed.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Annoyed = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AnnoyedSvg {...props} ref={ref} />);
});

Annoyed.displayName = 'Annoyed';

export default Annoyed;

// export default () => <Annoyed />;
        