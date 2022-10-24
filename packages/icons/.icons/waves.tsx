
import React from 'react';
import WavesSvg from '../svg/waves.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Waves = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WavesSvg {...props} ref={ref} />);
});

Waves.displayName = 'Waves';

export default Waves;

// export default () => <Waves />;
        