
import React from 'react';
import PodcastSvg from '../svg/podcast.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Podcast = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PodcastSvg {...props} ref={ref} />);
});

Podcast.displayName = 'Podcast';

export default Podcast;

// export default () => <Podcast />;
        