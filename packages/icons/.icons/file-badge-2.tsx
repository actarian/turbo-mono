
import React from 'react';
import FileBadge2Svg from '../svg/file-badge-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileBadge2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileBadge2Svg {...props} ref={ref} />);
});

FileBadge2.displayName = 'FileBadge2';

export default FileBadge2;

// export default () => <FileBadge2 />;
        