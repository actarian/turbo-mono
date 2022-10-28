import { ReactNode } from 'react';
import { Drawer, Text } from '../../components';
import { ProductsSearchFilters } from './products-search-filters';

export interface ProductsSearchFiltersModalProps {
  children?: ReactNode;
  visible: boolean;
  onClose: () => void;
}

export const ProductsSearchFiltersModal: React.FC<ProductsSearchFiltersModalProps> = ({ visible, onClose }: ProductsSearchFiltersModalProps) => {
  return (
    <Drawer visible={visible} onClose={onClose} placement="right">
      <Drawer.Title>
        <Text size="8" fontWeight="700">Filters</Text>
      </Drawer.Title>
      <Drawer.Content width="100vw" maxWidth="400px">
        <ProductsSearchFilters />
      </Drawer.Content>
    </Drawer>
  );
};
