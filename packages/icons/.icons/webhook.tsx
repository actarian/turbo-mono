
import React from 'react';
import WebhookSvg from '../svg/webhook.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Webhook = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WebhookSvg {...props} ref={ref} />);
});

Webhook.displayName = 'Webhook';

export default Webhook;

// export default () => <Webhook />;
        