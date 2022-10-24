
import React from 'react';
import CalculatorSvg from '../svg/calculator.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Calculator = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CalculatorSvg {...props} ref={ref} />);
});

Calculator.displayName = 'Calculator';

export default Calculator;

// export default () => <Calculator />;
        