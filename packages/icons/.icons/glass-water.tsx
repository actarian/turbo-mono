
import React from 'react';
import GlassWaterSvg from '../svg/glass-water.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlassWater = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GlassWaterSvg {...props} ref={ref} />);
});

GlassWater.displayName = 'GlassWater';

export default GlassWater;

// export default () => <GlassWater />;
        