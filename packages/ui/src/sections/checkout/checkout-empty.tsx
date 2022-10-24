import { useLabel, useLayout } from '@websolute/hooks';
import { Button, Container, Flex, NavLink, Section, Text } from '../../components';

export interface CheckoutEmptyProps {
}

const CheckoutEmpty: React.FC<CheckoutEmptyProps> = ({ }: CheckoutEmptyProps) => {

  const label = useLabel();

  const layout = useLayout();

  return (
    <>
      <Section>
        <Container minHeight="50vh">
          <Flex.Col gap="1rem" alignItems="center" textAlign="center">
            <Text size="4" fontWeight="700">Your cart is empty.</Text>
            <Text size="8" marginBottom="1rem" maxWidth="80ch">All’interno di Hexagon Shop è possibile acquistare i campioni delle collezioni Tiles, 3D Elements e Paints, complementi d’arredo in materiali inediti, elementi decorativi esclusivi e oggettistica legata all’universo del brand.</Text>
            <NavLink href={layout.topLevelHrefs.shop_index || ''} passHref>
              <Button as="a" variant="primary">Continue shopping</Button>
            </NavLink>
          </Flex.Col>
        </Container>
      </Section>
    </>
  );
};

export default CheckoutEmpty;
