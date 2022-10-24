
import React from 'react';
import ContactSvg from '../svg/contact.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Contact = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ContactSvg {...props} ref={ref} />);
});

Contact.displayName = 'Contact';

export default Contact;

// export default () => <Contact />;
        