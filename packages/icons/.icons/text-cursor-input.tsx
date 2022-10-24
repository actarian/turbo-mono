
import React from 'react';
import TextCursorInputSvg from '../svg/text-cursor-input.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TextCursorInput = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TextCursorInputSvg {...props} ref={ref} />);
});

TextCursorInput.displayName = 'TextCursorInput';

export default TextCursorInput;

// export default () => <TextCursorInput />;
        