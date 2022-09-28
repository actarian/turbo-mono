import { Send } from '@websolute/icons';
import React from 'react';
import { Box, Button, Flex, Grid } from '../../components';
import type { UIComponentProps } from '../../components/types';
import { Checkbox, CustomSelect, Field, Form, Input, Label, Radio, Select, TextArea } from '../../forms';

type Props = {
}

export type ContactFormProps = UIComponentProps<Props>;

const ContactForm: React.FC<ContactFormProps> = (props: ContactFormProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('ContactForm', e.target.value);
  }
  return (
    <Form>
      <Box padding='var(--grid-column-gap)' boxShadow='0 2rem 3rem #00000022' borderRadius='var(--border-radius)'>
        <Grid.Row rowGap='1rem'>
          <Grid md={6}>
            <Field>
              <Label>Name</Label>
              <Input placeholder="Name" onChange={onChange} />
            </Field>
          </Grid>
          <Grid md={6}>
            <Field>
              <Label>Surname</Label>
              <Input placeholder="Surname" />
            </Field>
          </Grid>
          <Grid md={6}>
            <Field>
              <Label>Email</Label>
              <Input placeholder="Email" />
            </Field>
          </Grid>
          <Grid md={6}>
            <Field>
              <Label>Country</Label>
              <Select name='country' id='country' defaultValue='Italia'>
                <option>Italia</option>
                <option>Canada</option>
                <option>Francia</option>
                <option>Germania</option>
                <option>Stati Uniti</option>
              </Select>
            </Field>
          </Grid>
          <Grid md={6}>
            <Field>
              <Label>CustomSelect</Label>
              <CustomSelect name='country' id='country' defaultValue='Italia' placeholder="select a value..">
                <CustomSelect.Label>Country</CustomSelect.Label>
                <CustomSelect.Option value="it">Italia</CustomSelect.Option>
                <CustomSelect.Option value="ca">Canada</CustomSelect.Option>
                <CustomSelect.Option value="fr">Francia</CustomSelect.Option>
                <CustomSelect.Option value="de">Germania</CustomSelect.Option>
                <CustomSelect.Option value="us">Stati Uniti</CustomSelect.Option>
              </CustomSelect>
            </Field>
          </Grid>
          <Grid md={6}>
            <Field>
              <Label>CustomSelect Multiple</Label>
              <CustomSelect placeholder="Frameworks" multiple initialValue={['1', '3', '4', '6']}>
                <CustomSelect.Label>Framework</CustomSelect.Label>
                <CustomSelect.Option value="1">React</CustomSelect.Option>
                <CustomSelect.Option value="2">Angular</CustomSelect.Option>
                <CustomSelect.Option value="3">Vue</CustomSelect.Option>
                <CustomSelect.Divider />
                <CustomSelect.Option value="4">Rails</CustomSelect.Option>
                <CustomSelect.Option value="5">Sinatra</CustomSelect.Option>
                <CustomSelect.Divider />
                <CustomSelect.Option value="6">Express</CustomSelect.Option>
                <CustomSelect.Option value="7">Koa</CustomSelect.Option>
              </CustomSelect>
            </Field>
          </Grid>
          <Grid>
            <Field>
              <Label>Message</Label>
              <TextArea placeholder="Message" />
            </Field>
          </Grid>
          <Grid>
            <Field>
              <Label><Radio name='color' id='red' value='red' /> Red</Label>
              <Label><Radio name='color' id='green' value='green' /> Green</Label>
              <Label><Radio name='color' id='blue' value='blue' /> Blue</Label>
            </Field>
          </Grid>
          <Grid>
            <Field>
              <Label><Checkbox name='privacy' id='privacy' /> Privacy</Label>
            </Field>
          </Grid>
          <Grid>
            <Flex.Row justifyContent="center">
              <Button variant="primary" size="lg"><span>Submit</span> <Send /></Button>
            </Flex.Row>
          </Grid>
        </Grid.Row>
      </Box>
    </Form>
  );
}

export default ContactForm;
