
import React from 'react';
import SaveSvg from '../icons/save.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Save = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SaveSvg {...props} ref={ref} />);
});

Save.displayName = 'Save';

export default Save;

// export default () => <Save />;
        