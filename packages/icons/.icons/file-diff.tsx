
import React from 'react';
import FileDiffSvg from '../svg/file-diff.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileDiff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileDiffSvg {...props} ref={ref} />);
});

FileDiff.displayName = 'FileDiff';

export default FileDiff;

// export default () => <FileDiff />;
        