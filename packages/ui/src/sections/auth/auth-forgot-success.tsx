import { ReactNode } from 'react';
import { Button, Flex, Text } from '../../components';

export type AuthForgotSuccessProps = {
  children?: ReactNode;
  onNavToLogin?: () => void;
};

export const AuthForgotSuccess: React.FC<AuthForgotSuccessProps> = ({ onNavToLogin }: AuthForgotSuccessProps) => {
  const onLogin = () => {
    if (typeof onNavToLogin === 'function') {
      onNavToLogin();
    }
  };
  return (
    <Flex.Col justifyContent="space-between">
      <Flex.Col flex="1" rowGap="1rem">
        <Text size="6" fontWeight="700">Password recovery</Text>
        <Text size="9" marginBottom="2rem">An email has been sent. please check your inbox.</Text>
        <Text size="6" fontWeight="700">Ready to login?</Text>
        <Button variant="primary" onClick={onLogin}>Login</Button>
      </Flex.Col>
    </Flex.Col>
  );
};
