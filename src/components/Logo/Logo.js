import { Box, Heading, Icon } from '@chakra-ui/react';
import { TiContacts } from 'react-icons/ti';

const Logo = () => {
  return (
    <Box display="flex" alignItems="center" columnGap={1}>
      <Icon as={TiContacts} boxSize={10} />
      <Heading as="h1">Phonebook</Heading>
    </Box>
  );
};

export default Logo;
