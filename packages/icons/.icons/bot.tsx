
import React from 'react';
import BotSvg from '../svg/bot.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bot = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BotSvg {...props} ref={ref} />);
});

Bot.displayName = 'Bot';

export default Bot;

// export default () => <Bot />;
        