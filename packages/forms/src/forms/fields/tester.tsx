// import { isDevelopment } from '@websolute/core';
import { useLabel } from '@websolute/hooks';
import { Box, Button, ButtonGroup, Text } from '@websolute/ui';
import { FormState } from '../types';

type TesterProps = {
  form: FormState<any>;
  onTest: () => void;
  onReset: () => void;
}

export default function Tester(props: TesterProps) {
  const label = useLabel();

  /*
  if (!isDevelopment) {
    return null;
  }
  */

  const json = JSON.stringify(props.form.value, null, 2);

  return (
    <Box margin="1em 0" padding="1em" border="1px solid var(--color-neutral-200)">
      <Text size="7">Form Tester</Text>
      <Text marginBottom="1em">this component is visible only during development.</Text>
      <code style={{ padding: '20px 0' }}>{json}</code>
      <ButtonGroup width="100%">
        <Button variant="secondary" onClick={props.onReset}>{label('form.reset')}</Button>
        <Button variant="secondary" onClick={props.onTest}>{label('form.test')}</Button>
      </ButtonGroup>
    </Box>
  );
}
