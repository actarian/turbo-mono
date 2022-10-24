
import React from 'react';
import BookmarkPlusSvg from '../svg/bookmark-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookmarkPlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BookmarkPlusSvg {...props} ref={ref} />);
});

BookmarkPlus.displayName = 'BookmarkPlus';

export default BookmarkPlus;

// export default () => <BookmarkPlus />;
        