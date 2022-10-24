
import React from 'react';
import FileTerminalSvg from '../svg/file-terminal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileTerminal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileTerminalSvg {...props} ref={ref} />);
});

FileTerminal.displayName = 'FileTerminal';

export default FileTerminal;

// export default () => <FileTerminal />;
        