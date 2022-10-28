
import { IEquatable } from '@websolute/core';
import { Filter, IFilterOption } from '@websolute/hooks';
import { XCircle } from '@websolute/icons';
import { Box, Button, Flex, Text } from '../../components';
import { ShopSearchItem } from './shop-search-card';

export function ShopSearchRecap({ filters, onChange }: { filters: Filter<ShopSearchItem>[], onChange: (filter: Filter<ShopSearchItem>, values: IEquatable[]) => void }) {

  const selectedFilters = filters.filter(x => x.hasAny());

  if (!selectedFilters.length) {
    return null;
  }

  const onRemove = (filter: Filter<ShopSearchItem>, option: IFilterOption) => {
    const values = [...filter.values];
    const index = values.indexOf(option.id);
    if (index !== -1) {
      values.splice(index, 1);
      // console.log('onRemove', filter.id, option.id, values);
      onChange(filter, values);
    }
  }

  return (
    <>
      {selectedFilters.map((filter, i) => (
        <Box key={filter.id} padding="1rem 0" borderBottom="2px solid var(--color-neutral-200)">
          <Text size="11" fontWeight="700" textTransform="uppercase" paddingRight="10px">{filter.title}</Text>
          <Flex.Row gap="1rem">
            <Flex.Row gap="0.5rem" flexWrap="wrap">
              {filter.options && filter.options.filter(x => filter.has(x)).map((option) => (
                <Button key={option.id} variant="primary" size="xs" onClick={() => onRemove(filter, option)}>
                  <XCircle />
                  <span>{option.title}</span>
                </Button>
              ))}
            </Flex.Row>
          </Flex.Row>
        </Box>
      ))}
    </>
  )
}
