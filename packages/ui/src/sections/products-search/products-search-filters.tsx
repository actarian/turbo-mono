import { Box, Flex, Text } from '../../components';
import { UIStyledComponentProps } from '../../components/types';
import { CustomSelect } from '../../forms';

type Props = {
};

export type ProductsSearchFiltersProps = UIStyledComponentProps<Props>;

export const ProductsSearchFilters: React.FC<ProductsSearchFiltersProps> = ({ ...props }: ProductsSearchFiltersProps) => {
  return (
    <Box {...props}>
      <Flex.Row gap="1rem">
        <Text size="11" fontWeight="700" textTransform="uppercase">Filter By</Text>
        <CustomSelect name="color" id="color" placeholder="Color" minWidth="200px">
          <CustomSelect.Label>Color</CustomSelect.Label>
          <CustomSelect.Option value="white">Bianco</CustomSelect.Option>
          <CustomSelect.Option value="gray">Grigio</CustomSelect.Option>
          <CustomSelect.Option value="brown">Marrone</CustomSelect.Option>
          <CustomSelect.Option value="green">Verde</CustomSelect.Option>
          <CustomSelect.Option value="red">Rosso</CustomSelect.Option>
          <CustomSelect.Option value="blue">Blu</CustomSelect.Option>
          <CustomSelect.Option value="black">Nero</CustomSelect.Option>
          <CustomSelect.Option value="earth">Terre</CustomSelect.Option>
          <CustomSelect.Option value="yellow">Giallo</CustomSelect.Option>
          <CustomSelect.Option value="violet">Viola</CustomSelect.Option>
          <CustomSelect.Option value="azure">Azzurro</CustomSelect.Option>
          <CustomSelect.Option value="pink">rosa</CustomSelect.Option>
        </CustomSelect>
        <CustomSelect name="designer" id="designer" placeholder="Designer" minWidth="200px">
          <CustomSelect.Label>Designer</CustomSelect.Label>
          <CustomSelect.Option value="1">Patricia Urquiola</CustomSelect.Option>
          <CustomSelect.Option value="2">Hella Jongerius</CustomSelect.Option>
          <CustomSelect.Option value="3">Edward Barber &amp; Jay Osgerby</CustomSelect.Option>
          <CustomSelect.Option value="4">Inga Sempé</CustomSelect.Option>
          <CustomSelect.Option value="5">Konstantin Grcic</CustomSelect.Option>
          <CustomSelect.Option value="6">Tokujin Yoshioka</CustomSelect.Option>
          <CustomSelect.Option value="7">Ronan &amp; Erwan Bouroullec</CustomSelect.Option>
          <CustomSelect.Option value="8">Raw Edges</CustomSelect.Option>
          <CustomSelect.Option value="9">Nathalie Du Pasquier</CustomSelect.Option>
          <CustomSelect.Option value="10">Laboratorio Avallone</CustomSelect.Option>
          <CustomSelect.Option value="11">OEO Studio</CustomSelect.Option>
          <CustomSelect.Option value="12">Vincent Van Duysen</CustomSelect.Option>
        </CustomSelect>
      </Flex.Row>


      {/*
      <Box {...props}>
        <Nav.Col marginBottom="2rem" fontSize="0.9rem">
          <Button variant="nav" as="a">Totes</Button>
          <Button variant="nav" as="a">Backpacks</Button>
          <Button variant="nav" as="a">Travel Bags</Button>
          <Button variant="nav" as="a">Hip Bags</Button>
          <Button variant="nav" as="a">Laptop Sleeves</Button>
        </Nav.Col>
        <Accordion.Group>
          <Accordion title="Color">
            <Box padding="0 0.15rem">
              <Label><Checkbox value='white' /> White</Label>
              <Label><Checkbox value='beige' /> Beige</Label>
              <Label><Checkbox value='blue' /> Blue</Label>
              <Label><Checkbox value='brown' /> Brown</Label>
              <Label><Checkbox value='green' /> Green</Label>
              <Label><Checkbox value='purple' /> Purple</Label>
            </Box>
          </Accordion>
          <Accordion title="Category">
            <Box padding="0 0.15rem">
              <Label><Checkbox value='white' /> New Arrivals</Label>
              <Label><Checkbox value='white' /> Sale</Label>
              <Label><Checkbox value='white' /> Travel</Label>
              <Label><Checkbox value='white' /> Organization</Label>
              <Label><Checkbox value='white' /> Accessories</Label>
            </Box>
          </Accordion>
          <Accordion title="Size">
            <Box padding="0 0.15rem">
              <Label><Checkbox value='white' /> 2L</Label>
              <Label><Checkbox value='white' /> 6L</Label>
              <Label><Checkbox value='white' /> 12L</Label>
              <Label><Checkbox value='white' /> 18L</Label>
              <Label><Checkbox value='white' /> 20L</Label>
              <Label><Checkbox value='white' /> 40L</Label>
            </Box>
          </Accordion>
        </Accordion.Group>
      </Box>
       */}
    </Box>
  );
};
