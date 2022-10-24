
import React from 'react';
import StickyNoteSvg from '../svg/sticky-note.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StickyNote = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<StickyNoteSvg {...props} ref={ref} />);
});

StickyNote.displayName = 'StickyNote';

export default StickyNote;

// export default () => <StickyNote />;
        