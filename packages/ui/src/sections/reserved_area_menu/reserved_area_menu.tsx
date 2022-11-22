import { httpGet, IEquatable } from '@websolute/core';
import { useUser } from '@websolute/hooks';
import { Box as BoxIcon, LogOut, User } from '@websolute/icons';
import { IRouteLink } from '@websolute/models';
import { Box, Nav, NavLink } from '@websolute/ui';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '../../components';
import { UIComponentProps } from '../../components/types';

type Props = {
  items: IRouteLink[],
};

export type ReservedAreaMenuProps = UIComponentProps<Props>;

export const ReservedAreaMenu: React.FC<ReservedAreaMenuProps> = (props: ReservedAreaMenuProps) => {

  const router = useRouter();

  const { setUser } = useUser((state) => state.actions);

  const onLogout = async () => {
    try {
      await httpGet('/api/auth/logout');
      setUser();
      router.push('/');

    } catch (error) {
      console.error('An unexpected error happened:', error);
    }
  };

  const [nav, setNav] = useState<IEquatable | null>(null);
  const onNav = (item?: IRouteLink) => {
    // console.log('onNav', item);
    const href = item?.href || null;
    setNav(href !== nav ? href : null);
  };

  const getIconById = (id: IEquatable) => {
    switch (id) {
      case 'reserved_area_order_index':
        return <BoxIcon />;
      case 'reserved_area_account':
        return <User />;
    }
    return null;
  };

  return (
    <Box position="sticky" top="120px">
      <Nav.Col marginBottom="2rem" fontSize="0.9rem">
        {props.items.map((x, i) => (
          <NavLink key={i} href={x.href} passHref>
            <Button as="a" variant="nav" onClick={() => onNav()}>
              {getIconById(x.id)}
              <span>{x.title}</span>
            </Button>
          </NavLink>
        ))}
        <Button variant="nav" as="a" onClick={() => onLogout()}>
          <LogOut />
          <span>Logout</span>
        </Button>
      </Nav.Col>
    </Box>
  );
};
