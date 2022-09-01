
import React from 'react';
import CpuSvg from '../icons/cpu.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cpu = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CpuSvg {...props} ref={ref} />);
});

Cpu.displayName = 'Cpu';

export default Cpu;

// export default () => <Cpu />;
        