
import React from 'react';
import ComponentSvg from '../svg/component.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Component = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ComponentSvg {...props} ref={ref} />);
});

Component.displayName = 'Component';

export default Component;

// export default () => <Component />;
        