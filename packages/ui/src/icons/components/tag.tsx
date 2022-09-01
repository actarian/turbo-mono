
import React from 'react';
import TagSvg from '../icons/tag.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tag = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TagSvg {...props} ref={ref} />);
});

Tag.displayName = 'Tag';

export default Tag;

// export default () => <Tag />;
        