
import React from 'react';
import ViewSvg from '../svg/view.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const View = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ViewSvg {...props} ref={ref} />);
});

View.displayName = 'View';

export default View;

// export default () => <View />;
        