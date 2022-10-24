
import React from 'react';
import FileEditSvg from '../svg/file-edit.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileEdit = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileEditSvg {...props} ref={ref} />);
});

FileEdit.displayName = 'FileEdit';

export default FileEdit;

// export default () => <FileEdit />;
        