import PropTypes from 'prop-types';
import Profile from 'components/Profile';
import { Box } from '@chakra-ui/react';
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

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
