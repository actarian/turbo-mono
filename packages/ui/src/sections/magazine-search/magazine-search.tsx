import { getClassNames, IEquatable } from '@websolute/core';
import type { IFilterOption } from '@websolute/hooks';
import { Filter, filtersToParams, useDrawer, useFilters, useInfiniteLoader, useSearchParamsEncoded } from '@websolute/hooks';
import { Filter as FilterIcon } from '@websolute/icons';
import type { IFeatureType } from '@websolute/models';
import { useCallback } from 'react';
import { Box, Button, Container, Flex, InfiniteLoader, Section, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';
import type { MagazineSearchItem } from './magazine-search-card';
import MagazineSearchCard from './magazine-search-card';
import MagazineSearchFiltersModal from './magazine-search-filters-modal';
import MagazineSearchRecap from './magazine-search-recap';

// this is the actual filtering function of the magazine
function filterMagazineItem(key: string, item: MagazineSearchItem, value: IEquatable) {
  switch (key) {
    case 'category':
      return item.categoryId === value;
    case 'title':
      return item.title.toLowerCase().includes(value.toString().toLowerCase());
    default:
      return true;
  }
}

function getDefaultFilterParams(filter?: { [key: string]: IEquatable[] }, categoryId?: IEquatable): { [key: string]: IEquatable[] } | undefined {
  if (filter) {
    return filter;
  }
  if (categoryId) {
    return {
      category: [categoryId]
    };
  }
  return undefined;
}

type Props = {
  items: MagazineSearchItem[];
  featureTypes: IFeatureType[];
  categoryId?: IEquatable;
};

export type MagazineSearchProps = UIStyledComponentProps<Props>;

const MagazineSearch: React.FC<MagazineSearchProps> = ({ items, featureTypes, categoryId, ...props }: MagazineSearchProps) => {

  // deserialize queryString encoded params
  const { params, replaceParamsSilently } = useSearchParamsEncoded();

  // using item filter callback from service
  const filterItem = useCallback(filterMagazineItem, []);

  // initialize filters with items, featureTypes and queryString params
  const { filteredItems, filters, setFilter } = useFilters<MagazineSearchItem>(items, featureTypes, filterItem, getDefaultFilterParams(params?.filter, categoryId));

  // fires when user make a change on filters
  const onFilterChange = (filter: Filter<MagazineSearchItem>, values?: IEquatable[]) => {
    // console.log('MagazineSearchCSR.onFilterChange', filter, values);
    setFilter(filter, values);
    // pagination.goToPage(1);
    // serializing querystring filter
    const filterParams = filtersToParams(filters);
    replaceParamsSilently({ filter: filterParams, pagination: { page: 1 } });
  }

  const onFilterOptionToggle = (filter: Filter<MagazineSearchItem>, option?: IFilterOption) => {
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

  const categoryFilter = filters.find(x => x.id === 'category');

  return (
    <>
      <div
        css={`
        position: sticky;
        top: 80px;
        z-index: 900;
        background: white;
      `}
      >
        <Box padding="1rem 0" borderTop="2px solid var(--color-neutral-200)">
          <Container>
            <Flex.Row gap="2rem" justifyContent="center" alignItems="center">

              <Flex.Row gap="2rem" display="none" displaySm="flex">
                <Text size="11" fontWeight="700" textTransform="uppercase">Filter By</Text>
                {categoryFilter && (
                  <Flex.Row gap="2rem">
                    <Button variant="nav" size="lg" onClick={() => onFilterOptionToggle(categoryFilter)}>All</Button>
                    {categoryFilter.options.map((option, o) => (
                      <Button key={o} variant="nav" size="lg" className={getClassNames({ active: categoryFilter.has(option) })} onClick={() => onFilterOptionToggle(categoryFilter, option)}>
                        {option.title}
                      </Button>
                    ))}
                  </Flex.Row>
                )}
              </Flex.Row>

              <Button variant="nav" display="block" displaySm="none" onClick={() => onOpenDrawer('filters')}><FilterIcon /></Button>

              <MagazineSearchFiltersModal visible={drawer == 'filters'} onClose={onCloseDrawer} />
            </Flex.Row>
          </Container>
        </Box>
      </div>
      {false && <MagazineSearchRecap filters={filters} onChange={onFilterChange} />}
      <Section padding="3rem 0" id="serp">
        <Container.Fluid>
          <Flex.Flow columns="1" columnsMd="2" rowGap="5rem">
            {visibleItems.map((item, i) => (
              <Flex key={i} css={`
                padding-top: 3rem;
                padding-bottom: 3rem;
                padding-right: ${[12, 8, 4, 0][i % 4]}%;
                padding-left: ${[8, 4, 0][(i + 1) % 3]}%;
              `}>
                <MagazineSearchCard item={item}></MagazineSearchCard>
              </Flex>
            ))}
          </Flex.Flow>
          {true && hasMore &&
            <Flex.Row justifyContent="center">
              <Button variant="outline" onClick={onMore}>View More</Button>
            </Flex.Row>
          }
          {false && hasMore &&
            <Flex.Row justifyContent="center">
              <InfiniteLoader onMore={onMore}>more</InfiniteLoader>
            </Flex.Row>
          }
          {/*
          <Pagination count={5} margin="2rem 0">
            <Pagination.Previous><ChevronLeft /></Pagination.Previous>
            <Pagination.Next><ChevronRight /></Pagination.Next>
          </Pagination>
           */}
        </Container.Fluid>
      </Section>
    </>
  )
}

export default MagazineSearch;
