import { useDrawer } from '@websolute/hooks';
import { ChevronDown, ChevronLeft, ChevronRight, Filter } from '@websolute/icons';
import { Button, Container, Flex, Grid, Nav, Pagination, Popover, Section, Text } from '../../components';
import { ComponentCssResponsiveProps } from '../../components/types';
import ProductsSearchCard, { ProductSearchItem } from './products-search-card';
import ProductsSearchFilters from './products-search-filters';
import ProductsSearchFiltersModal from './products-search-filters-modal';

const SortMenu = () => (
  <Nav.Col minWidth="150px">
    <Button variant="nav" as="a">Most Popular</Button>
    <Button variant="nav" as="a">Best Rating</Button>
    <Button variant="nav" as="a">Newest</Button>
    <Button variant="nav" as="a">Price: Low to High</Button>
    <Button variant="nav" as="a">Price: High to Low</Button>
  </Nav.Col>
)

type Props = {
  items: ProductSearchItem[]
}

export type ProductsSearchProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const ProductsSearch: React.FC<ProductsSearchProps> = ({ items, ...props }: ProductsSearchProps) => {
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  return (
    <Section padding="3rem 0" id="serp">
      <Container>
        <Flex.Row justifyContent="space-between" alignItems="flex-end" paddingBottom="1rem" borderBottom="1px solid var(--color-neutral-200)" marginBottom="1.5rem">
          <Text size="5" fontWeight="700">New Arrivals</Text>
          <Flex.Row justifyContent="flex-end">
            <Popover content={SortMenu}>
              <Button variant="nav"><span>Sort</span> <ChevronDown /></Button>
            </Popover>
            <Button variant="nav" display="block" displaySm="none" onClick={() => onOpenDrawer('filters')}><Filter /></Button>
            <ProductsSearchFiltersModal visible={drawer == 'filters'} onClose={onCloseDrawer} />
          </Flex.Row>
        </Flex.Row>
        <Grid.Row>
          <Grid display="none" displaySm="block" sm={4} md={3}>
            <ProductsSearchFilters />
          </Grid>
          <Grid sm={8} md={9}>
            <Grid.Row columnGap="1rem" rowGap="1rem">
              {items.map((item, i) => (
                <Grid sm={6} md={3} key={i}>
                  <ProductsSearchCard item={item}></ProductsSearchCard>
                </Grid>
              ))}
            </Grid.Row>
            <Pagination count={5} margin="2rem 0">
              <Pagination.Previous><ChevronLeft /></Pagination.Previous>
              <Pagination.Next><ChevronRight /></Pagination.Next>
            </Pagination>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  )
}

export default ProductsSearch;
