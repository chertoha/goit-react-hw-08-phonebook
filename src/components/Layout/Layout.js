import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <Box pb={5} pt={5}>
      <Outlet />
    </Box>
  );
};

export default Layout;
