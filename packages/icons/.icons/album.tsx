
import React from 'react';
import AlbumSvg from '../svg/album.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Album = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlbumSvg {...props} ref={ref} />);
});

Album.displayName = 'Album';

export default Album;

// export default () => <Album />;
        