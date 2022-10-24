
import React from 'react';
import FolderHeartSvg from '../svg/folder-heart.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderHeart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderHeartSvg {...props} ref={ref} />);
});

FolderHeart.displayName = 'FolderHeart';

export default FolderHeart;

// export default () => <FolderHeart />;
        