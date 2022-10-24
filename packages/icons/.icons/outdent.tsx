
import React from 'react';
import OutdentSvg from '../svg/outdent.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Outdent = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<OutdentSvg {...props} ref={ref} />);
});

Outdent.displayName = 'Outdent';

export default Outdent;

// export default () => <Outdent />;
        