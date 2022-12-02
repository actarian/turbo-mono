import { getClassNames, IEquatable } from '@websolute/core';
import { Filter, filtersToParams, IFilterOption, scrollToSelector, useDrawer, useFilters, useLabel, usePagination, useSearchParamsEncoded, useSorting } from '@websolute/hooks';
import { ChevronDown, ChevronLeft, ChevronRight, Filter as FilterIcon, Grid as GridIcon, Square } from '@websolute/icons';
import { ICategory, IFeatureType } from '@websolute/models';
import { useCallback, useState } from 'react';
import { Accordion, Box, Button, Container, Flex, Grid, Nav, Pagination, Popover, Section, Text } from '../../components';
import { UIStyledComponentProps } from '../../components/types';
import { Checkbox, Label } from '../../forms';
import { ShopSearchCard, ShopSearchItem } from './shop-search-card';
import { ShopSearchFilters } from './shop-search-filters';
import { ShopSearchFiltersModal } from './shop-search-filters-modal';
import { ShopSearchRecap } from './shop-search-recap';

// this is the actual filtering function of the shop
function filterShopItem(key: string, item: ShopSearchItem, value: IEquatable) {
  switch (key) {
    case 'category':
      return item.category === value;
    case 'collection':
      return item.collection === value;
    case 'designer':
      return item.designer === value;
    case 'color':
      return item.color === value;
    /*
  case 'title':
    return item.title.toLowerCase().includes(value.toString().toLowerCase());
    */
    default:
      return true;
  }
}

function getDefaultFilterParams(filter?: { [key: string]: IEquatable[] }, category?: IEquatable | ICategory): { [key: string]: IEquatable[] } | undefined {
  if (filter) {
    return filter;
  }
  if (category) {
    return {
      category: [typeof category === 'object' ? category.id : category]
    };
  }
  return undefined;
}

const SortMenu = ({ sort, onSort }: { sort: IEquatable | undefined, onSort: (sort: IEquatable) => void }) => (
  <Nav.Col minWidth="150px">
    <Button variant="nav" as="a" className={getClassNames({ active: sort === 1 })} onClick={() => onSort(1)}>Suggested</Button>
    <Button variant="nav" as="a" className={getClassNames({ active: sort === 2 })} onClick={() => onSort(2)}>Price: Low to High</Button>
    <Button variant="nav" as="a" className={getClassNames({ active: sort === 3 })} onClick={() => onSort(3)}>Price: High to Low</Button>
  </Nav.Col>
);

type Props = {
  items: ShopSearchItem[];
  featureTypes: IFeatureType[];
  category?: IEquatable | ICategory;
};

export type ShopSearchProps = UIStyledComponentProps<Props>;

export const ShopSearch: React.FC<ShopSearchProps> = ({ items, featureTypes, category, ...props }: ShopSearchProps) => {

  // deserialize queryString encoded params
  const { params, replaceParamsSilently } = useSearchParamsEncoded();

  // using item filter callback from service
  const filterItem = useCallback(filterShopItem, []);

  // initialize filters with items, featureTypes and queryString params
  const { filteredItems, filters, setFilter } = useFilters<ShopSearchItem>(items, featureTypes, filterItem, getDefaultFilterParams(params?.filter, category));

  // initialize sort with filteredItems and queryString params
  const sortParams = (params && params.sorting) || {};
  const sorting = useSorting(filteredItems, (items, sort) => {
    switch (sort) {
      case 2:
        items.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case 3:
        items.sort((a, b) => {
          return b.price - a.price;
        });
        break;
    }
    return items;
  }, sortParams.sort);

  // initialize pagination with sorting.items and queryString params
  const paginationParams = (params && params.pagination) || {};
  const pagination = usePagination<ShopSearchItem>(sorting.items, paginationParams.page, paginationParams.perPage);

  // fires when user make a change on filters
  const onFilterChange = (filter?: Filter<ShopSearchItem>, values?: IEquatable[]) => {
    // console.log('ShopSearch.onFilterChange', filter, values);
    setFilter(filter, values);
    pagination.goToPage(1);
    // serializing querystring filter
    const filterParams = filtersToParams(filters);
    replaceParamsSilently({ filter: filterParams, pagination: { page: 1 } });
  };

  // fires when user toggle an option
  const onFilterOptionToggle = (filter: Filter<ShopSearchItem>, option?: IFilterOption) => {
    if (option) {
      filter.toggle(option);
    } else {
      filter.clear();
    }
    onFilterChange(filter, filter.values);
    scrollToSelector('#serp', -80);
  };

  // fires when user make a change on sort
  function onSortChange(sort: IEquatable) {
    // console.log('ShopSearch.onSortChange', sort);
    sorting.setSort(sort);
    // serializing querystring pagination
    replaceParamsSilently({ sorting: { sort } });
    scrollToSelector('#serp', -80);
  }

  // fires when user make a change on pagination
  function onPaginationChange(page: number) {
    // console.log('ShopSearch.onPaginationChange', page);
    pagination.goToPage(page);
    // serializing querystring pagination
    replaceParamsSilently({ pagination: { page } });
    scrollToSelector('#serp', -80);
  }

  // visible results paged by the infinite scroll or button loader
  // const [visibleItems, onMore, hasMore] = useInfiniteLoader(filteredItems);

  const [drawer, openDrawer, closeDrawer] = useDrawer();
  const [large, setLarge] = useState<boolean>(true);

  const categoryFilter = filters.find(x => x.id === 'category');
  const otherFilters = filters.filter(x => x.id !== 'category');

  // fires when user select a main category
  const onSetCategory = (option?: IFilterOption) => {
    if (categoryFilter) {
      otherFilters.forEach(filter => filter.clear());
      if (option) {
        categoryFilter.set(option);
      } else {
        categoryFilter.clear();
      }
      onFilterChange();
      scrollToSelector('#serp', -80);
    }
  };

  const label = useLabel();

  return (
    <>
      <Section padding="0" position="sticky" top="80px" zIndex="900" background="white" borderBottom="1px solid var(--color-neutral-200)">
        <Container.Fluid>
          <Flex.Row justifyContent="space-between" padding="1rem 0">
            <Flex.Row gap="2rem" justifyContent="center" alignItems="center">
              <Flex.Row gap="2rem" display="none" displaySm="flex">
                <Text size="11" fontWeight="700" textTransform="uppercase">Filter By</Text>
                {categoryFilter && (
                  <Flex.Row gap="2rem">
                    <Button variant="nav" size="lg"
                      onClick={() => onSetCategory()}>All</Button>
                    {categoryFilter.options.map((option, o) => (
                      <Button key={o} variant="nav" size="lg"
                        className={getClassNames({ active: categoryFilter.has(option) })}
                        onClick={() => onSetCategory(option)}>
                        {option.title}
                      </Button>
                    ))}
                  </Flex.Row>
                )}
              </Flex.Row>
              <Button variant="nav" display="block" displaySm="none" onClick={() => openDrawer('filters')}><FilterIcon /></Button>
              <ShopSearchFiltersModal visible={drawer == 'filters'} onClose={closeDrawer} />
            </Flex.Row>

            <Flex.Row justifyContent="flex-end" gap="2rem">

              <Flex.Row gap="1rem">
                <Text size="11" fontWeight="700" textTransform="uppercase">View</Text>
                <Button variant="toggle" className={getClassNames({ active: large })} onClick={() => setLarge(true)}><Square /></Button>
                <Button variant="toggle" className={getClassNames({ active: !large })} onClick={() => setLarge(false)}><GridIcon /></Button>
              </Flex.Row>

              <Popover content={<SortMenu sort={sorting.sort} onSort={onSortChange} />}>
                <Button variant="nav">
                  <Text size="11" fontWeight="700" textTransform="uppercase">Sort</Text>
                  <ChevronDown />
                </Button>
              </Popover>

              <Button variant="nav" display="block" displaySm="none" onClick={() => openDrawer('filters')}><FilterIcon /></Button>
              <ShopSearchFiltersModal visible={drawer == 'filters'} onClose={closeDrawer} />
            </Flex.Row>
          </Flex.Row>
        </Container.Fluid>
      </Section>

      <Section padding="3rem 0" id="serp">
        <Container.Fluid>
          <Grid.Row>
            <Grid display="none" displaySm="block" sm={4} md={3}>
              {false && <ShopSearchFilters />}

              <Box position="sticky" top="160px">

                <ShopSearchRecap filters={otherFilters} onChange={onFilterChange} />

                {false &&
                  <Nav.Col marginBottom="2rem" fontSize="0.9rem">
                    <Button variant="nav" as="a">Totes</Button>
                    <Button variant="nav" as="a">Backpacks</Button>
                    <Button variant="nav" as="a">Travel Bags</Button>
                    <Button variant="nav" as="a">Hip Bags</Button>
                    <Button variant="nav" as="a">Laptop Sleeves</Button>
                  </Nav.Col>
                }

                <Accordion.Group>
                  {otherFilters.filter(x => x.hasResults()).map((filter, f) => (
                    <Accordion key={f} id={filter.id} title={filter.title} initialVisible>
                      <Box padding="0 0.15rem">
                        {filter.options.filter(x => x.count).map((option, o) => (
                          <Flex.Row key={option.id} justifyContent="space-between">
                            <Label><Checkbox checked={filter.has(option)} disabled={option.count === 0} onChange={(event) => onFilterOptionToggle(filter, option)} />
                              <Text size="11">{option.title}</Text>
                            </Label>
                            {option.count ? <Box>{option.count}</Box> : null}
                          </Flex.Row>
                        ))}
                      </Box>
                    </Accordion>
                  ))}
                </Accordion.Group>
              </Box>

            </Grid>
            <Grid sm={8} md={9}>
              <Grid.Row columnGap="1rem" rowGap="1rem">
                {pagination.items && pagination.items.map((item, i) => (
                  <Grid key={item.id} xs={large ? 12 : 6} sm={large ? 6 : 4} md={large ? 4 : 3} lg={large ? 3 : 2}>
                    <ShopSearchCard item={item}></ShopSearchCard>
                  </Grid>
                ))}
              </Grid.Row>

              {pagination.items && pagination.pages > 1 &&
                <Pagination margin="2rem 0" count={pagination.pages} initialPage={pagination.page} page={pagination.page} onChange={onPaginationChange}>
                  {false && <Pagination.Previous>{label('pagination.prev')}</Pagination.Previous>}
                  {false && <Pagination.Next>{label('pagination.next')}</Pagination.Next>}
                  <Pagination.Previous><ChevronLeft /></Pagination.Previous>
                  <Pagination.Next><ChevronRight /></Pagination.Next>
                </Pagination>
              }

            </Grid>
          </Grid.Row>
        </Container.Fluid>
      </Section>
    </>
  );
};
