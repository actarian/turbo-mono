
import React from 'react';
import CloudFogSvg from '../svg/cloud-fog.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudFog = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudFogSvg {...props} ref={ref} />);
});

CloudFog.displayName = 'CloudFog';

export default CloudFog;

// export default () => <CloudFog />;
        