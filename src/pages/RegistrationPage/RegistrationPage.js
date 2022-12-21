import RegistrationForm from 'components/RegistrationForm';
import { useAuth } from 'hooks/useAuth';

const RegistrationPage = () => {
  const { error } = useAuth();
  return (
    <>
      <RegistrationForm />
      {error && <div>Error: {error}</div>}
    </>
  );
};

export default RegistrationPage;
