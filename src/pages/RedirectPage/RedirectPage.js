import { Navigate } from 'react-router';

const RedirectPage = () => {
  const path = false ? 'contacts' : 'login';
  return <Navigate to={path} replace />;
};

export default RedirectPage;
