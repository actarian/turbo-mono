
import React from 'react';
import BookSvg from '../icons/book.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Book = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BookSvg {...props} ref={ref} />);
});

Book.displayName = 'Book';

export default Book;

// export default () => <Book />;
        