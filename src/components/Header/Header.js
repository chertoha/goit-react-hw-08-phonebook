import PropTypes from 'prop-types';
import Filter from 'components/Filter';
import Logo from 'components/Logo';
import Navbar from 'components/Navbar';
import { Box } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

const Header = ({ button }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

  return (
    <Navbar>
      {!isMobile && <Logo />}

      <Box display="flex" alignItems="center">
        <Box w={isMobile ? '90%' : '60%'} mt={1} display="flex">
          <Filter type="flushed" iconRight />
        </Box>
        {!isMobile && button}
      </Box>
    </Navbar>
  );
};

Header.propTypes = {
  button: PropTypes.element,
};

export default Header;
