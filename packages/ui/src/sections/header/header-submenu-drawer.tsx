import { IRouteLink } from '@websolute/models';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Drawer, Grid } from '../../components';

export interface HeaderSubmenuProps {
  submenu: IRouteLink[] | null;
  children?: ReactNode;
  visible: boolean;
  onClose: () => void;
}

const StyledSubmenu = styled.div`
  width: 100%;
  height: 400px;
  background: white;
`

const HeaderSubmenuDrawer: React.FC<HeaderSubmenuProps> = ({ submenu, visible, onClose }: HeaderSubmenuProps) => {
  return (
    <Drawer visible={visible} onClose={onClose} placement="top">
      <Drawer.Content flex="1" display="flex" width="100vw">
        {submenu &&
          <StyledSubmenu>
            <Grid.Row columnGap="1rem" rowGap="1rem">
              {submenu.map((item, i) => (
                <Grid sm={6} md={3} key={i}>
                  {item.title}
                </Grid>
              ))}
            </Grid.Row>
          </StyledSubmenu>}
      </Drawer.Content>
    </Drawer>
  );
};

export default HeaderSubmenuDrawer;
