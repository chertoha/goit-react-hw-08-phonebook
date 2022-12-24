import RegistrationForm from 'components/RegistrationForm';
import Notify from 'utils/notification';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';

const RegistrationPage = () => {
  const { error } = useAuth();

  // console.log(error)
  useEffect(() => {
    if (error) {
      Notify.failure(`Error: ${error} `);
    }
  }, [error]);

  return (
    <>
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
