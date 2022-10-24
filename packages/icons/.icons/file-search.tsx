
import React from 'react';
import FileSearchSvg from '../svg/file-search.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileSearch = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileSearchSvg {...props} ref={ref} />);
});

FileSearch.displayName = 'FileSearch';

export default FileSearch;

// export default () => <FileSearch />;
        