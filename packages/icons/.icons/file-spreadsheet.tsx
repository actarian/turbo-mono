
import React from 'react';
import FileSpreadsheetSvg from '../svg/file-spreadsheet.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileSpreadsheet = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileSpreadsheetSvg {...props} ref={ref} />);
});

FileSpreadsheet.displayName = 'FileSpreadsheet';

export default FileSpreadsheet;

// export default () => <FileSpreadsheet />;
        