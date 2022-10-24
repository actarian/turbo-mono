
import React from 'react';
import FileCogSvg from '../svg/file-cog.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileCog = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileCogSvg {...props} ref={ref} />);
});

FileCog.displayName = 'FileCog';

export default FileCog;

// export default () => <FileCog />;
        