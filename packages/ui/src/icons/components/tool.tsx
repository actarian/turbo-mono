
import React from 'react';
import ToolSvg from '../icons/tool.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tool = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ToolSvg {...props} ref={ref} />);
});

Tool.displayName = 'Tool';

export default Tool;

// export default () => <Tool />;
        