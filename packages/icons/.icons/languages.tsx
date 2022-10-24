
import React from 'react';
import LanguagesSvg from '../svg/languages.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Languages = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LanguagesSvg {...props} ref={ref} />);
});

Languages.displayName = 'Languages';

export default Languages;

// export default () => <Languages />;
        