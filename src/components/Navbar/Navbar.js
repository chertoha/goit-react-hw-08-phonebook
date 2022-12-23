// import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Profile from 'components/Profile';
import { useAuth } from 'hooks/useAuth';
const Navbar = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Box display="flex" pl={3} mb={5}>
      <Box flexBasis="100%">{children}</Box>
      <Box> {isLoggedIn && <Profile />}</Box>
    </Box>
  );
};

export default Navbar;
