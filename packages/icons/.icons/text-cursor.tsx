
import React from 'react';
import TextCursorSvg from '../svg/text-cursor.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TextCursor = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TextCursorSvg {...props} ref={ref} />);
});

TextCursor.displayName = 'TextCursor';

export default TextCursor;

// export default () => <TextCursor />;
        