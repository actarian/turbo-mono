
import React from 'react';
import CigaretteOffSvg from '../svg/cigarette-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CigaretteOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CigaretteOffSvg {...props} ref={ref} />);
});

CigaretteOff.displayName = 'CigaretteOff';

export default CigaretteOff;

// export default () => <CigaretteOff />;
        