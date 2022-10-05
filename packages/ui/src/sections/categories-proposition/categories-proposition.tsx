import { ArrowRight } from '@websolute/icons';
import Link from 'next/link';
import { Button, Container, Flex, Grid, Section, Text } from '../../components';
import type { UIComponentProps } from '../../components/types';
import CategoriesPropositionCard, { CategoriesPropositionItem } from './categories-proposition-card';

type Props = {
  items: CategoriesPropositionItem[],
}

export type CategoriesPropositionProps = UIComponentProps<Props>;

const CategoriesProposition: React.FC<CategoriesPropositionProps> = ({ items }: CategoriesPropositionProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Flex.Row justifyContent="space-between" marginBottom="1rem">
          <Text size="7" fontWeight="700">Shop by category</Text>
          <Link href="/#categories" passHref={true}>
            <Button as="a" variant="link"><span>Browse all categories</span> <ArrowRight /></Button>
          </Link>
        </Flex.Row>
        <Grid.Row columnGap="1rem" rowGap="1rem">
          <Grid sm={6}>
            <CategoriesPropositionCard aspectRatio={1} aspectRatioSm='auto' heightSm='100%' item={items[0]}></CategoriesPropositionCard>
          </Grid>
          <Grid sm={6}>
            <Flex.Col rowGap="1rem">
              <CategoriesPropositionCard aspectRatio={4 / 3} aspectRatioMd={2 / 1} item={items[1]}></CategoriesPropositionCard>
              <CategoriesPropositionCard aspectRatio={4 / 3} aspectRatioMd={2 / 1} item={items[2]}></CategoriesPropositionCard>
            </Flex.Col>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  )
}

export default CategoriesProposition;
