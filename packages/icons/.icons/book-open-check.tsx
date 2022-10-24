
import React from 'react';
import BookOpenCheckSvg from '../svg/book-open-check.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookOpenCheck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BookOpenCheckSvg {...props} ref={ref} />);
});

BookOpenCheck.displayName = 'BookOpenCheck';

export default BookOpenCheck;

// export default () => <BookOpenCheck />;
        