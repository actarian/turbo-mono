
import React from 'react';
import RedoSvg from '../svg/redo.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Redo = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RedoSvg {...props} ref={ref} />);
});

Redo.displayName = 'Redo';

export default Redo;

// export default () => <Redo />;
        