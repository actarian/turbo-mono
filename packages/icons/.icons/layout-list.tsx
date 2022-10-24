
import React from 'react';
import LayoutListSvg from '../svg/layout-list.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LayoutList = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LayoutListSvg {...props} ref={ref} />);
});

LayoutList.displayName = 'LayoutList';

export default LayoutList;

// export default () => <LayoutList />;
        