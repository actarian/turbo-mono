import { ReactNode } from 'react';
import { Drawer } from '../../components';
import { Auth } from './auth';

export type AuthDrawerProps = {
  children?: ReactNode;
  visible: boolean;
  onClose: () => void;
};

export const AuthDrawer: React.FC<AuthDrawerProps> = ({ visible, onClose }: AuthDrawerProps) => {
  return (
    <Drawer visible={visible} onClose={onClose} placement="right">
      <Drawer.Title>
        <span>&nbsp;</span>
      </Drawer.Title>
      <Drawer.Content flex="1" display="flex" width="100vw" maxWidth="400px">
        <Auth />
      </Drawer.Content>
    </Drawer>
  );
};
