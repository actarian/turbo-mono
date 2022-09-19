import { isDevelopment } from '@websolute/core';
import { FormState } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { Box, Button, Flex, Text } from '../../components';

type FormTesterProps = {
  form: FormState<any>;
  onTest: () => void;
  onReset: () => void;
}

export default function FormTester(props: FormTesterProps) {
  const label = useLabel();

  if (!isDevelopment) {
    return null;
  }

  const json = JSON.stringify(props.form.value, null, 2);

  return (
    <Box margin="1em 0" padding="1em" border="1px solid var(--color-neutral-200)">
      <Text size="7">Form Tester</Text>
      <Text marginBottom="1em">this component is visible only during development.</Text>
      <Flex.Responsive marginBottom="1em">
        <Button variant="secondary" onClick={props.onReset}>{label('form.reset')}</Button>
        <Button variant="secondary" onClick={props.onTest}>{label('form.test')}</Button>
      </Flex.Responsive>
      <code style={{ padding: '20px 0' }}>{json}</code>
    </Box>
  );
}
