
import React from 'react';
import MapSvg from '../icons/map.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Map = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MapSvg {...props} ref={ref} />);
});

Map.displayName = 'Map';

export default Map;

// export default () => <Map />;
        