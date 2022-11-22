
import { IEquatable } from '@websolute/core';
import { Filter, IFilterOption } from '@websolute/hooks';
import { XCircle } from '@websolute/icons';
import { Box, Button, Container, Flex, Text } from '../../components';
import { MagazineSearchItem } from './magazine-search-card';

export function MagazineSearchRecap({ filters, onChange }: { filters: Filter<MagazineSearchItem>[], onChange: (filter: Filter<MagazineSearchItem>, values: IEquatable[]) => void }) {

  const selectedFilters = filters.filter(x => x.hasAny());

  if (!selectedFilters.length) {
    return null;
  }

  const onRemove = (filter: Filter<MagazineSearchItem>, option: IFilterOption) => {
    const values = [...filter.values];
    const index = values.indexOf(option.id);
    if (index !== -1) {
      values.splice(index, 1);
      // console.log('onRemove', filter.id, option.id, values);
      onChange(filter, values);
    }
  };

  return (
    <Box padding="1rem 0" borderBottom="2px solid var(--color-neutral-200)">
      <Container>
        <Flex.Row gap="1rem" flexWrap="wrap">
          {selectedFilters.map((filter, i) => (
            <Flex.Row key={filter.id} gap="1rem">
              <Text size="11" fontWeight="700" textTransform="uppercase" paddingRight="10px">{filter.title}</Text>
              <Flex.Row gap="0.5rem">
                {filter.options && filter.options.filter(x => filter.has(x)).map((option) => (
                  <Button key={option.id} variant="secondary" size="sm" onClick={() => onRemove(filter, option)}>
                    <XCircle />
                    <span>{option.title}</span>
                  </Button>
                ))}
              </Flex.Row>

              {false && filter.options && filter.options.filter(x => filter.has(x)).map((option) => (
                <Button key={option.id} onClick={() => onRemove(filter, option)}>
                  <XCircle />
                  <span>{option.title}</span>
                </Button>
              ))}

            </Flex.Row>
          ))}
        </Flex.Row>
      </Container>
    </Box>
  );
}
