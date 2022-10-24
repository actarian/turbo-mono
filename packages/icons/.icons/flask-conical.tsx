
import React from 'react';
import FlaskConicalSvg from '../svg/flask-conical.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlaskConical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlaskConicalSvg {...props} ref={ref} />);
});

FlaskConical.displayName = 'FlaskConical';

export default FlaskConical;

// export default () => <FlaskConical />;
        