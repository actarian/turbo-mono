
import React from 'react';
import FolderSearchSvg from '../svg/folder-search.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderSearch = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderSearchSvg {...props} ref={ref} />);
});

FolderSearch.displayName = 'FolderSearch';

export default FolderSearch;

// export default () => <FolderSearch />;
        