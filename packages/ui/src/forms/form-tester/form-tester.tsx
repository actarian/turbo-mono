import { isDevelopment } from '@websolute/core';
import { FormState } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { Box, Button, Flex, Text } from '../../components';

const TESTER_PRODUCTION = true;

type FormTesterProps = {
  form: FormState<any>;
  onTest: () => void;
  onReset: () => void;
};

export function FormTester(props: FormTesterProps) {
  const label = useLabel();

  if (!TESTER_PRODUCTION && !isDevelopment) {
    return null;
  }

  const json = JSON.stringify(props.form.value, null, 2);

  return (
    <Box margin="1em 0" padding="0.5em 1em" border="1px solid var(--color-warning-500)" background="var(--color-warning-100)">
      <Flex.Row justifyContent="space-between">
        <Flex.Col>
          <Text size="8" fontWeight="700">Form Tester</Text>
          <Text size="10" marginBottom="1em">this component is visible only during development.</Text>
        </Flex.Col>
        <Flex.Row marginBottom="1em">
          <Button variant="secondary" onClick={props.onReset}>{label('form.reset')}</Button>
          <Button variant="primary" onClick={props.onTest}>{label('form.test')}</Button>
        </Flex.Row>
      </Flex.Row>
      <code style={{ padding: '20px 0' }}>{json}</code>
    </Box>
  );
}
