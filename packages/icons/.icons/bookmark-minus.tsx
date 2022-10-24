
import React from 'react';
import BookmarkMinusSvg from '../svg/bookmark-minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookmarkMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BookmarkMinusSvg {...props} ref={ref} />);
});

BookmarkMinus.displayName = 'BookmarkMinus';

export default BookmarkMinus;

// export default () => <BookmarkMinus />;
        