import { Calendar, RefreshCcw, Truck } from '@websolute/icons';
import { Box, Container, Flex, Grid, Section, Text } from '../../components';
import type { UIComponentProps } from '../../components/types';

type Props = {
}

export type ProductsIncentiveProps = UIComponentProps<Props>;

const ProductsIncentive: React.FC<ProductsIncentiveProps> = ({ }: ProductsIncentiveProps) => {
  return (
    <Section padding="2rem 0">
      <Container>
        <Grid.Row columnGap="2rem">
          <Grid sm={4} borderRightSm="1px solid var(--color-neutral-200)">
            <Flex.Row padding="1rem 0">
              <Calendar width="2rem" height="2rem" color="var(--color-primary-500)" />
              <Box marginLeft="0.5rem">
                <Text size="10">We&apos;ll replace it with a new one</Text>
                <Text size="9" fontWeight="700">10-years all-inclusive warranty</Text>
              </Box>
            </Flex.Row>
          </Grid>
          <Grid sm={4} borderRightSm="1px solid var(--color-neutral-200)">
            <Flex.Row padding="1rem 0">
              <RefreshCcw width="2rem" height="2rem" color="var(--color-primary-500)" />
              <Box marginLeft="0.5rem">
                <Text size="10">Send it back for free</Text>
                <Text size="9" fontWeight="700">Free shipping on returns</Text>
              </Box>
            </Flex.Row>
          </Grid>
          <Grid sm={4}>
            <Flex.Row padding="1rem 0">
              <Truck width="2rem" height="2rem" color="var(--color-primary-500)" />
              <Box marginLeft="0.5rem">
                <Text size="10">The shipping is on us</Text>
                <Text size="9" fontWeight="700">Free, contactless delivery</Text>
              </Box>
            </Flex.Row>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  )
}

export default ProductsIncentive;
