
import React from 'react';
import FileSignatureSvg from '../svg/file-signature.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileSignature = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileSignatureSvg {...props} ref={ref} />);
});

FileSignature.displayName = 'FileSignature';

export default FileSignature;

// export default () => <FileSignature />;
        