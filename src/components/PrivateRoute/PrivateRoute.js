import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({ redirectTo, component: Component }) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
