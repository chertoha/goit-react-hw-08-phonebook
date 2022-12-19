import { Navigate } from 'react-router';

const path = false ? 'contacts' : 'login';

const RedirectPage = () => {
  return <Navigate to={path} replace />;
};

export default RedirectPage;
