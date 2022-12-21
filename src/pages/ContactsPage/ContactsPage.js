// import Box from 'components/Box';
import { Box } from '@chakra-ui/react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import Filter from 'components/Filter';

const ContactPage = () => {
  return (
    <>
      <Container>
        <Box as="h1" textAlign="center" pt={3} pb={3}>
          Phone book
        </Box>
      </Container>

      <Container>
        <ContactForm />
      </Container>

      <Container>
        <Box as="h2" textAlign="center">
          Contacts
        </Box>
      </Container>

      <Container>
        <Filter />
      </Container>

      <Container>
        <ContactList />
      </Container>
    </>
  );
};

export default ContactPage;
