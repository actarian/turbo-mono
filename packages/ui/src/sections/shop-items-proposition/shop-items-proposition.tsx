import { Container, Grid, Section } from '../../components';
import type { UIComponentProps } from '../../components/types';
import ShopItemsPropositionCard, { ShopItemsPropositionItem } from './shop-items-proposition-card';

type Props = {
  items: ShopItemsPropositionItem[],
}

export type ShopItemsPropositionProps = UIComponentProps<Props>;

const ShopItemsProposition: React.FC<ShopItemsPropositionProps> = ({ items }: ShopItemsPropositionProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Grid.Row columnGap="1rem" rowGap="2rem">
          {items.map((item, i) => (
            <Grid sm={6} md={4} key={i}>
              <ShopItemsPropositionCard item={item}></ShopItemsPropositionCard>
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  )
}

export default ShopItemsProposition;
