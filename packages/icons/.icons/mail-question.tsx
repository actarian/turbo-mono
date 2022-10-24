
import React from 'react';
import MailQuestionSvg from '../svg/mail-question.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MailQuestion = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MailQuestionSvg {...props} ref={ref} />);
});

MailQuestion.displayName = 'MailQuestion';

export default MailQuestion;

// export default () => <MailQuestion />;
        