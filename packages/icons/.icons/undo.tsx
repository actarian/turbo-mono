
import React from 'react';
import UndoSvg from '../svg/undo.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Undo = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UndoSvg {...props} ref={ref} />);
});

Undo.displayName = 'Undo';

export default Undo;

// export default () => <Undo />;
        