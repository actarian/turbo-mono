import { Accordion, Box, Button, Nav } from '../../components';
import { UIStyledComponentProps } from '../../components/types';
import { Checkbox, Label } from '../../forms';

type Props = {
};

export type ShopSearchFiltersProps = UIStyledComponentProps<Props>;

export const ShopSearchFilters: React.FC<ShopSearchFiltersProps> = ({ ...props }: ShopSearchFiltersProps) => {
  return (
    <Box {...props}>
      <Nav.Col marginBottom="2rem" fontSize="0.9rem">
        <Button variant="nav" as="a">Totes</Button>
        <Button variant="nav" as="a">Backpacks</Button>
        <Button variant="nav" as="a">Travel Bags</Button>
        <Button variant="nav" as="a">Hip Bags</Button>
        <Button variant="nav" as="a">Laptop Sleeves</Button>
      </Nav.Col>
      <Accordion.Group>
        <Accordion title="Color" initialVisible>
          <Box padding="0 0.15rem">
            <Label><Checkbox value="white" /> White</Label>
            <Label><Checkbox value="beige" /> Beige</Label>
            <Label><Checkbox value="blue" /> Blue</Label>
            <Label><Checkbox value="brown" /> Brown</Label>
            <Label><Checkbox value="green" /> Green</Label>
            <Label><Checkbox value="purple" /> Purple</Label>
          </Box>
        </Accordion>
        <Accordion title="Category" initialVisible>
          <Box padding="0 0.15rem">
            <Label><Checkbox value="white" /> New Arrivals</Label>
            <Label><Checkbox value="white" /> Sale</Label>
            <Label><Checkbox value="white" /> Travel</Label>
            <Label><Checkbox value="white" /> Organization</Label>
            <Label><Checkbox value="white" /> Accessories</Label>
          </Box>
        </Accordion>
        <Accordion title="Size" initialVisible>
          <Box padding="0 0.15rem">
            <Label><Checkbox value="white" /> 2L</Label>
            <Label><Checkbox value="white" /> 6L</Label>
            <Label><Checkbox value="white" /> 12L</Label>
            <Label><Checkbox value="white" /> 18L</Label>
            <Label><Checkbox value="white" /> 20L</Label>
            <Label><Checkbox value="white" /> 40L</Label>
          </Box>
        </Accordion>
      </Accordion.Group>
    </Box>
  );
};
