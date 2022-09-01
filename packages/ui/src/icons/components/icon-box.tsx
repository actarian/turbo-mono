
import React from 'react';
import IconBoxSvg from '../icons/icon-box.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconBox = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<IconBoxSvg {...props} ref={ref} />);
});

IconBox.displayName = 'IconBox';

export default IconBox;

// export default () => <IconBox />;
        