
import React from 'react';
import LayersSvg from '../svg/layers.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layers = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LayersSvg {...props} ref={ref} />);
});

Layers.displayName = 'Layers';

export default Layers;

// export default () => <Layers />;
        