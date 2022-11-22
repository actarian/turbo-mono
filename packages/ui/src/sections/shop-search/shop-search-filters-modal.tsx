import { ReactNode } from 'react';
import { Drawer, Text } from '../../components';
import { ShopSearchFilters } from './shop-search-filters';

export type ShopSearchFiltersModalProps = {
  children?: ReactNode;
  visible: boolean;
  onClose: () => void;
};

export const ShopSearchFiltersModal: React.FC<ShopSearchFiltersModalProps> = ({ visible, onClose }: ShopSearchFiltersModalProps) => {
  return (
    <Drawer visible={visible} onClose={onClose} placement="right">
      <Drawer.Title>
        <Text size="8" fontWeight="700">Filters</Text>
      </Drawer.Title>
      <Drawer.Content width="100vw" maxWidth="400px">
        <ShopSearchFilters />
      </Drawer.Content>
    </Drawer>
  );
};
