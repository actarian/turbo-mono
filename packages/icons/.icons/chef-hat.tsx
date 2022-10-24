
import React from 'react';
import ChefHatSvg from '../svg/chef-hat.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChefHat = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChefHatSvg {...props} ref={ref} />);
});

ChefHat.displayName = 'ChefHat';

export default ChefHat;

// export default () => <ChefHat />;
        