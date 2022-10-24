
import React from 'react';
import PuzzleSvg from '../svg/puzzle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Puzzle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PuzzleSvg {...props} ref={ref} />);
});

Puzzle.displayName = 'Puzzle';

export default Puzzle;

// export default () => <Puzzle />;
        