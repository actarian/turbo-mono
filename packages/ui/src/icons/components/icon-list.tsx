
import React from 'react';
import IconListSvg from '../icons/icon-list.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconList = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<IconListSvg {...props} ref={ref} />);
});

IconList.displayName = 'IconList';

export default IconList;

// export default () => <IconList />;
        