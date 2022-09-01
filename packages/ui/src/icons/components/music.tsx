
import React from 'react';
import MusicSvg from '../icons/music.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Music = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MusicSvg {...props} ref={ref} />);
});

Music.displayName = 'Music';

export default Music;

// export default () => <Music />;
        