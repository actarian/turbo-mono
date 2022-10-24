
import React from 'react';
import ListMusicSvg from '../svg/list-music.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListMusic = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ListMusicSvg {...props} ref={ref} />);
});

ListMusic.displayName = 'ListMusic';

export default ListMusic;

// export default () => <ListMusic />;
        