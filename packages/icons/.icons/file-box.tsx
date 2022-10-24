
import React from 'react';
import FileBoxSvg from '../svg/file-box.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileBox = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileBoxSvg {...props} ref={ref} />);
});

FileBox.displayName = 'FileBox';

export default FileBox;

// export default () => <FileBox />;
        