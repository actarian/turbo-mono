
import React from 'react';
import SettingsSvg from '../icons/settings.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Settings = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SettingsSvg {...props} ref={ref} />);
});

Settings.displayName = 'Settings';

export default Settings;

// export default () => <Settings />;
        