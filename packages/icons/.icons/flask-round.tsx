
import React from 'react';
import FlaskRoundSvg from '../svg/flask-round.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlaskRound = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlaskRoundSvg {...props} ref={ref} />);
});

FlaskRound.displayName = 'FlaskRound';

export default FlaskRound;

// export default () => <FlaskRound />;
        