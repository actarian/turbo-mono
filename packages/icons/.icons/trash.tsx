
import React from 'react';
import TrashSvg from '../svg/trash.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Trash = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TrashSvg {...props} ref={ref} />);
});

Trash.displayName = 'Trash';
