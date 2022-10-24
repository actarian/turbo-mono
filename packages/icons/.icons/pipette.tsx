
import React from 'react';
import PipetteSvg from '../svg/pipette.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Pipette = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PipetteSvg {...props} ref={ref} />);
});

Pipette.displayName = 'Pipette';

export default Pipette;

// export default () => <Pipette />;
        