import { Drawer, Text } from '@ui-components';
import { ReactNode } from 'react';
import ProductsSearchFilters from './products-search-filters';

export interface ProductsSearchFiltersModalProps {
  children?: ReactNode;
  visible: boolean;
  onClose: () => void;
}

const ProductsSearchFiltersModal: React.FC<ProductsSearchFiltersModalProps> = ({ visible, onClose }: ProductsSearchFiltersModalProps) => {
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

export default ProductsSearchFiltersModal;
