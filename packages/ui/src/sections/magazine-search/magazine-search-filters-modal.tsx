import { ReactNode } from 'react';
import { Drawer, Text } from '../../components';
import { MagazineSearchFilters } from './magazine-search-filters';

export type MagazineSearchFiltersModalProps = {
  children?: ReactNode;
  visible: boolean;
  onClose: () => void;
}

export const MagazineSearchFiltersModal: React.FC<MagazineSearchFiltersModalProps> = ({ visible, onClose }: MagazineSearchFiltersModalProps) => {
  return (
    <Drawer visible={visible} onClose={onClose} placement="right">
      <Drawer.Title>
        <Text size="8" fontWeight="700">Filters</Text>
      </Drawer.Title>
      <Drawer.Content width="100vw" maxWidth="400px">
        <MagazineSearchFilters />
      </Drawer.Content>
    </Drawer>
  );
};
