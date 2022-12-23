// import Navbar from 'components/Navbar';
// import { useAuth } from 'hooks/useAuth';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router';

const Layout = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Box pb={5}>
      {/* {isLoggedIn && <Navbar />} */}

      <Outlet />
    </Box>
  );
};

export default Layout;
