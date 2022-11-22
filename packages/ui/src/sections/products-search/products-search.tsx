import { getClassNames, IEquatable } from '@websolute/core';
import { Filter, filtersToParams, useDrawer, useFilters, useInfiniteLoader, useSearchParamsEncoded } from '@websolute/hooks';
import { ChevronDown, Filter as FilterIcon, Grid as GridIcon, Square } from '@websolute/icons';
import { IFeatureType } from '@websolute/models';
import { useCallback, useState } from 'react';
import { Box, Button, Container, Flex, Grid, InfiniteLoader, Nav, Popover, Section, Text } from '../../components';
import { UIStyledComponentProps } from '../../components/types';
import { CustomSelect } from '../../forms';
import { ProductSearchItem, ProductsSearchCard } from './products-search-card';
import { ProductsSearchFilters } from './products-search-filters';
import { ProductsSearchFiltersModal } from './products-search-filters-modal';
import { ProductsSearchRecap } from './products-search-recap';

const SortMenu = () => (
  <Nav.Col minWidth="150px">
    <Button variant="nav" as="a">Most Popular</Button>
    <Button variant="nav" as="a">Best Rating</Button>
    <Button variant="nav" as="a">Newest</Button>
    <Button variant="nav" as="a">Price: Low to High</Button>
    <Button variant="nav" as="a">Price: High to Low</Button>
  </Nav.Col>
);

// this is the actual filtering function of the products
function filterProductItem(key: string, item: ProductSearchItem, value: IEquatable) {
  switch (key) {
    case 'color':
      return item.colors.includes(value);
    case 'designer':
      return item.designer === value;
    case 'title':
      return item.title.toLowerCase().includes(value.toString().toLowerCase());
    default:
      return false;
  }
}

type Props = {
  items: ProductSearchItem[];
  featureTypes: IFeatureType[];
};

export type ProductsSearchProps = UIStyledComponentProps<Props>;

export const ProductsSearch: React.FC<ProductsSearchProps> = ({ items, featureTypes, ...props }: ProductsSearchProps) => {

  // deserialize queryString encoded params
  const { params, replaceParamsSilently } = useSearchParamsEncoded();

  // using item filter callback from service
  const filterItem = useCallback(filterProductItem, []);

  // initialize filters with items, featureTypes and queryString params
  const { filteredItems, filters, setFilter } = useFilters<ProductSearchItem>(items, featureTypes, filterItem, params?.filter);

  // fires when user make a change on filters
  const onFilterChange = (filter: Filter<ProductSearchItem>, values?: IEquatable[]) => {
    // console.log('ProductSearchCSR.onFilterChange', filter, values);
    setFilter(filter, values);
    // pagination.goToPage(1);
    // serializing querystring filter
    const filterParams = filtersToParams(filters);
    replaceParamsSilently({ filter: filterParams, pagination: { page: 1 } });
  };

  const onCustomSelectChange = (value: string | string[], filter: Filter<ProductSearchItem>) => {
    const ids = Array.isArray(value) ? value : [value];
    const option = filter.options?.find(x => {
      return x.id === parseInt(ids[0]);
    });
    if (option) {
      filter.toggle(option);
      onFilterChange(filter, filter.values);
    }
    console.log('onCustomSelectChange', filter, option, value);
  };

  // visible results paged by the infinite scroll or button loader
  const [visibleItems, onMore, hasMore] = useInfiniteLoader(filteredItems);

  const [drawer, openDrawer, closeDrawer] = useDrawer();
  const [large, setLarge] = useState<boolean>(false);

  return (
    <>
      <Box padding="1rem 0" borderBottom="2px solid var(--color-neutral-200)">
        <Container>
          <Flex.Row gap="2rem" justifyContent="space-between" alignItems="center">

            {false &&
              <ProductsSearchFilters display="none" displaySm="flex" />
            }

            <Flex.Row display="none" displaySm="flex" gap="1rem" flex="1">
              <Text size="11" fontWeight="700" textTransform="uppercase">Filter By</Text>
              {filters.map((filter, f) => (
                <CustomSelect key={f} name={filter.id} id={filter.id} value={''} placeholder={filter.title} onChange={(event) => onCustomSelectChange(event, filter)}
                  flex="1" minWidth="200px">
                  <CustomSelect.Label>{filter.title}</CustomSelect.Label>
                  {filter.options.map((option, o) => (
                    <CustomSelect.Option key={o} value={option.id.toString()}>{option.title}</CustomSelect.Option>
                  ))}
                </CustomSelect>
              ))}
            </Flex.Row>

            <Flex.Row gap="2rem">

              {false &&
                <Popover content={SortMenu}>
                  <Button variant="nav">
                    <Text size="11" fontWeight="700" textTransform="uppercase">Sort</Text>
                    <ChevronDown />
                  </Button>
                </Popover>
              }

              <Flex.Row gap="1rem">
                <Text size="11" fontWeight="700" textTransform="uppercase">View</Text>
                <Button variant="toggle" className={getClassNames({ active: !large })} onClick={() => setLarge(false)}><GridIcon /></Button>
                <Button variant="toggle" className={getClassNames({ active: large })} onClick={() => setLarge(true)}><Square /></Button>
              </Flex.Row>

            </Flex.Row>
            <Button variant="nav" display="block" displaySm="none" onClick={() => openDrawer('filters')}><FilterIcon /></Button>

            <ProductsSearchFiltersModal visible={drawer == 'filters'} onClose={closeDrawer} />

          </Flex.Row>
        </Container>
      </Box>
      <ProductsSearchRecap filters={filters} onChange={onFilterChange} />
      <Section padding="3rem 0" id="serp">
        <Container>
          <Grid.Row columnGap="1rem" rowGap="2.5rem">
            {visibleItems.map((item, i) => (
              <Grid key={i} sm={large ? 12 : 6} md={large ? 6 : 4} lg={large ? 4 : 3}>
                <ProductsSearchCard item={item}></ProductsSearchCard>
              </Grid>
            ))}
            {true && hasMore &&
              <Grid alignItems="center">
                <Button variant="outline" onClick={onMore}>View More</Button>
              </Grid>
            }
            {false && hasMore &&
              <Grid>
                <InfiniteLoader onMore={onMore}>more</InfiniteLoader>
              </Grid>
            }
          </Grid.Row>
          {/*
          <Pagination count={5} margin="2rem 0">
            <Pagination.Previous><ChevronLeft /></Pagination.Previous>
            <Pagination.Next><ChevronRight /></Pagination.Next>
          </Pagination>
           */}
        </Container>
      </Section>
    </>
  );
};
