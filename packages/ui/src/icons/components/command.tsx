
import React from 'react';
import CommandSvg from '../icons/command.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Command = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CommandSvg {...props} ref={ref} />);
});

Command.displayName = 'Command';

export default Command;

// export default () => <Command />;
        