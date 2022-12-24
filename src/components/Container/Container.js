import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

const Container = ({ children }) => {
  return (
    <Box ml="auto" mr="auto" minWidth={290} maxWidth={568} pl={15} pr={15}>
      {children}
    </Box>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
