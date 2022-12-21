import LoginForm from 'components/LoginForm';
import { useAuth } from 'hooks/useAuth';

const LoginPage = () => {
  const { error } = useAuth();
  // console.log(error);
  return (
    <>
      <LoginForm />
      {error && <div>Error: {error}</div>}
    </>
  );
};

export default LoginPage;
