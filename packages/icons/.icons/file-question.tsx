
import React from 'react';
import FileQuestionSvg from '../svg/file-question.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileQuestion = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileQuestionSvg {...props} ref={ref} />);
});

FileQuestion.displayName = 'FileQuestion';

export default FileQuestion;

// export default () => <FileQuestion />;
        