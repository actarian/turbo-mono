
import React from 'react';
import FileCog2Svg from '../svg/file-cog-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileCog2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileCog2Svg {...props} ref={ref} />);
});

FileCog2.displayName = 'FileCog2';

export default FileCog2;

// export default () => <FileCog2 />;
        