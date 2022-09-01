import { ReactNode } from 'react';
import { Button, Flex, Text } from '../../components';

export interface AuthRegisterSuccessProps {
  children?: ReactNode;
  onNavToLogin?: () => void;
}

const AuthRegisterSuccess: React.FC<AuthRegisterSuccessProps> = ({ onNavToLogin }: AuthRegisterSuccessProps) => {
  const onLogin = () => {
    if (typeof onNavToLogin === 'function') {
      onNavToLogin();
    }
  }
  return (
    <Flex.Col justifyContent="space-between">
      <Flex.Col flex="1" rowGap="1rem">
        <Text size="6" fontWeight="700">Thank you for registering</Text>
        <Text size="9" marginBottom="2rem">A confimation email has been sent to your address. Please check your inbox.</Text>
        <Text size="6" fontWeight="700">Ready to login?</Text>
        <Button variant="primary" onClick={onLogin}>Login</Button>
      </Flex.Col>
    </Flex.Col>
  );
};

export default AuthRegisterSuccess;
