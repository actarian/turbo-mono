
import React from 'react';
import LayoutTemplateSvg from '../svg/layout-template.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LayoutTemplate = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LayoutTemplateSvg {...props} ref={ref} />);
});

LayoutTemplate.displayName = 'LayoutTemplate';

export default LayoutTemplate;

// export default () => <LayoutTemplate />;
        