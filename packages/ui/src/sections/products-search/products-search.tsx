import { useDrawer } from '@websolute/hooks';
import { ChevronDown, ChevronLeft, ChevronRight } from '@websolute/icons';
import { Button, Container, Flex, Grid, MediaType, Nav, Pagination, Popover, Section, Text } from '../../components';
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
            <Button variant="nav" display="block" displaySm="none" onClick={() => onOpenDrawer('filters')}><IconFilter /></Button>
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

export const ProductsSearchDefaults = {
  items: [{
    id: 1,
    schema: 'product',
    href: '/product',
    title: 'Earthen Bottle',
    abstract: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    price: 48,
    media: {
      type: MediaType.Image,
      src: '/product-list-01.jpg',
    },
  }, {
    id: 2,
    schema: 'product',
    href: '/product',
    title: 'Nomad Tumbler',
    abstract: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    price: 35,
    media: {
      type: MediaType.Image,
      src: '/product-list-02.jpg',
    },
  }, {
    id: 3,
    schema: 'product',
    href: '/product',
    title: 'Focus Paper Refill',
    abstract: 'Person using a pen to cross a task off a productivity paper card.',
    price: 89,
    media: {
      type: MediaType.Image,
      src: '/product-list-03.jpg',
    },
  }, {
    id: 4,
    schema: 'product',
    href: '/product',
    title: 'Machined Mechanical Pencil',
    abstract: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    price: 35,
    media: {
      type: MediaType.Image,
      src: '/product-list-04.jpg',
    }
  }, {
    id: 5,
    schema: 'product',
    href: '/product',
    title: 'Focus Card Tray',
    abstract: 'Paper card sitting upright in walnut card holder on desk.',
    price: 64,
    media: {
      type: MediaType.Image,
      src: '/product-list-05.jpg',
    }
  }, {
    id: 6,
    schema: 'product',
    href: '/product',
    title: 'Focus Multi-Pack',
    abstract: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
    price: 39,
    media: {
      type: MediaType.Image,
      src: '/product-list-06.jpg',
    }
  }, {
    id: 7,
    schema: 'product',
    href: '/product',
    title: 'Brass Scissors',
    abstract: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
    price: 50,
    media: {
      type: MediaType.Image,
      src: '/product-list-07.jpg',
    }
  }, {
    id: 8,
    schema: 'product',
    href: '/product',
    title: 'Focus Carry Pouch',
    abstract: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    price: 32,
    media: {
      type: MediaType.Image,
      src: '/product-list-08.jpg',
    }
  }]
};

ProductsSearch.defaultProps = ProductsSearchDefaults;

export default ProductsSearch;
