import Navbar from 'components/Navbar';
import { useAuth } from 'hooks/useAuth';
import { Outlet } from 'react-router';

const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn && <Navbar />}

      <Outlet />
    </div>
  );
};

export default Layout;
