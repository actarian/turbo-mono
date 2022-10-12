import type { IEquatable } from '@websolute/core';
import type { IFilterOption } from '@websolute/hooks';
import { Filter, filtersToParams, useDrawer, useFilters, useInfiniteLoader, useSearchParams } from '@websolute/hooks';
import { ChevronDown, ChevronLeft, ChevronRight, Filter as FilterIcon } from '@websolute/icons';
import type { IFeatureType } from '@websolute/models';
import { useCallback, useState } from 'react';
import { Accordion, Box, Button, Container, Flex, Grid, InfiniteLoader, Nav, Pagination, Popover, Section, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';
import { Checkbox, Label } from '../../forms';
import ShopSearchCard, { ShopSearchItem } from './shop-search-card';
import ShopSearchFilters from './shop-search-filters';
import ShopSearchFiltersModal from './shop-search-filters-modal';

function filterProductItem(key: string, item: ShopSearchItem, value: IEquatable) {
  switch (key) {
    case 'color':
      return true;
    // return item.colors.includes(value);
    case 'designer':
      return true;
    // return item.designer === value;
    case 'title':
      return item.title.toLowerCase().includes(value.toString().toLowerCase());
    default:
      return false;
  }
}

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
  title: string;
  items: ShopSearchItem[];
  featureTypes: IFeatureType[];
}

export type ShopSearchProps = UIStyledComponentProps<Props>;

const ShopSearch: React.FC<ShopSearchProps> = ({ title, items, featureTypes, ...props }: ShopSearchProps) => {

  // deserialize queryString encoded params
  const { params, replaceParamsSilently } = useSearchParams();

  // using item filter callback from service
  const filterItem = useCallback(filterProductItem, []);

  // initialize filters with items, featureTypes and queryString params
  const { filteredItems, filters, setFilter } = useFilters<ShopSearchItem>(items, featureTypes, filterItem, params?.filter);

  // fires when user make a change on filters
  const onFilterChange = (filter: Filter<ShopSearchItem>, values?: IEquatable[]) => {
    // console.log('ProductSearchCSR.onFilterChange', filter, values);
    setFilter(filter, values);
    // pagination.goToPage(1);
    // serializing querystring filter
    const filterParams = filtersToParams(filters);
    replaceParamsSilently({ filter: filterParams, pagination: { page: 1 } });
  }

  const onCustomSelectChange = (value: string | string[], filter: Filter<ShopSearchItem>) => {
    const ids = Array.isArray(value) ? value : [value];
    const option = filter.options?.find(x => {
      return x.id === parseInt(ids[0]);
    });
    if (option) {
      filter.toggle(option);
      onFilterChange(filter, filter.values);
    }
    console.log('onCustomSelectChange', filter, option, value);
  }

  const onFilterOptionToggle = (filter: Filter<ShopSearchItem>, option?: IFilterOption) => {
    if (option) {
      filter.toggle(option);
    } else {
      filter.clear();
    }
    onFilterChange(filter, filter.values);
  }

  // visible results paged by the infinite scroll or button loader
  const [visibleItems, onMore, hasMore] = useInfiniteLoader(filteredItems);

  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  const [large, setLarge] = useState<boolean>(false);

  return (
    <Section padding="3rem 0" id="serp">
      <Container>
        <Flex.Row justifyContent="space-between" alignItems="flex-end" paddingBottom="1rem" borderBottom="1px solid var(--color-neutral-200)" marginBottom="1.5rem">
          <Text size="5" fontWeight="700">{title}</Text>
          <Flex.Row justifyContent="flex-end">
            <Popover content={SortMenu}>
              <Button variant="nav"><span>Sort</span> <ChevronDown /></Button>
            </Popover>
            <Button variant="nav" display="block" displaySm="none" onClick={() => onOpenDrawer('filters')}><FilterIcon /></Button>
            <ShopSearchFiltersModal visible={drawer == 'filters'} onClose={onCloseDrawer} />
          </Flex.Row>
        </Flex.Row>
        <Grid.Row>
          <Grid display="none" displaySm="block" sm={4} md={3}>
            {false && <ShopSearchFilters />}

            <Box {...props}>
              <Nav.Col marginBottom="2rem" fontSize="0.9rem">
                <Button variant="nav" as="a">Totes</Button>
                <Button variant="nav" as="a">Backpacks</Button>
                <Button variant="nav" as="a">Travel Bags</Button>
                <Button variant="nav" as="a">Hip Bags</Button>
                <Button variant="nav" as="a">Laptop Sleeves</Button>
              </Nav.Col>
              <Accordion.Group>
                {filters.map((filter, f) => (
                  <Accordion key={f} id={filter.id} title={filter.title}>
                    <Box padding="0 0.15rem">
                      {filter.options.map((option, o) => (
                        <Label key={o}><Checkbox value={option.id} onChange={(event) => onFilterOptionToggle(filter, option)} /> {option.title}</Label>
                      ))}
                    </Box>
                  </Accordion>
                ))}
              </Accordion.Group>
            </Box>

          </Grid>
          <Grid sm={8} md={9}>
            <Grid.Row columnGap="1rem" rowGap="1rem">
              {visibleItems.map((item, i) => (
                <Grid sm={6} md={3} key={i}>
                  <ShopSearchCard item={item}></ShopSearchCard>
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

export default ShopSearch;
