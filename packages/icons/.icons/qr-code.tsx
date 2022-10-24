
import React from 'react';
import QrCodeSvg from '../svg/qr-code.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QrCode = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<QrCodeSvg {...props} ref={ref} />);
});

QrCode.displayName = 'QrCode';

export default QrCode;

// export default () => <QrCode />;
        