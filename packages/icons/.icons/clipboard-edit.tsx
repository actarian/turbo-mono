
import React from 'react';
import ClipboardEditSvg from '../svg/clipboard-edit.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClipboardEdit = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ClipboardEditSvg {...props} ref={ref} />);
});

ClipboardEdit.displayName = 'ClipboardEdit';

export default ClipboardEdit;

// export default () => <ClipboardEdit />;
        