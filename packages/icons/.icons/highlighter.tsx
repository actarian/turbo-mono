
import React from 'react';
import HighlighterSvg from '../svg/highlighter.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Highlighter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HighlighterSvg {...props} ref={ref} />);
});

Highlighter.displayName = 'Highlighter';

export default Highlighter;

// export default () => <Highlighter />;
        