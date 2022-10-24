
import React from 'react';
import FileBadgeSvg from '../svg/file-badge.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileBadge = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileBadgeSvg {...props} ref={ref} />);
});

FileBadge.displayName = 'FileBadge';

export default FileBadge;

// export default () => <FileBadge />;
        