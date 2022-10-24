
import React from 'react';
import ImportSvg from '../svg/import.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Import = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ImportSvg {...props} ref={ref} />);
});

Import.displayName = 'Import';

export default Import;

// export default () => <Import />;
        