import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router';

const RestrictedRoute = ({ redirectTo, component: Component }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
