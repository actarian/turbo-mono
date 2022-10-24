
import React from 'react';
import TagsSvg from '../svg/tags.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tags = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TagsSvg {...props} ref={ref} />);
});

Tags.displayName = 'Tags';

export default Tags;

// export default () => <Tags />;
        