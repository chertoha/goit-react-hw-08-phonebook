import LoginForm from 'components/LoginForm';
import Notify from 'utils/notification';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';

const LoginPage = () => {
  const { error } = useAuth();

  useEffect(() => {
    if (error) {
      Notify.failure(`Error: ${error} `);
    }
  }, [error]);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
