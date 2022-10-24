
import React from 'react';
import PencilSvg from '../svg/pencil.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Pencil = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PencilSvg {...props} ref={ref} />);
});

Pencil.displayName = 'Pencil';

export default Pencil;

// export default () => <Pencil />;
        