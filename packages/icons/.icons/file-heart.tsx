
import React from 'react';
import FileHeartSvg from '../svg/file-heart.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileHeart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileHeartSvg {...props} ref={ref} />);
});

FileHeart.displayName = 'FileHeart';

export default FileHeart;

// export default () => <FileHeart />;
        