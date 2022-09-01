
import React from 'react';
import FilmSvg from '../icons/film.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Film = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FilmSvg {...props} ref={ref} />);
});

Film.displayName = 'Film';

export default Film;

// export default () => <Film />;
        