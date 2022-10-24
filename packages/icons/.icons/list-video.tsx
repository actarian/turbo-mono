
import React from 'react';
import ListVideoSvg from '../svg/list-video.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListVideo = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ListVideoSvg {...props} ref={ref} />);
});

ListVideo.displayName = 'ListVideo';

export default ListVideo;

// export default () => <ListVideo />;
        