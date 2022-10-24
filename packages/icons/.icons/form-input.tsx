
import React from 'react';
import FormInputSvg from '../svg/form-input.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormInput = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FormInputSvg {...props} ref={ref} />);
});

FormInput.displayName = 'FormInput';

export default FormInput;

// export default () => <FormInput />;
        