
import React from 'react';
import BoneSvg from '../svg/bone.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bone = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BoneSvg {...props} ref={ref} />);
});

Bone.displayName = 'Bone';

export default Bone;

// export default () => <Bone />;
        