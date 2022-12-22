import ContactList from 'components/ContactList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import ModalDefault from 'components/ModalDefault';
import ContactForm from 'components/ContactForm';
import { Box, Heading } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <>
      <Container>
        <Heading as="h1" size="lg">
          Phone book
        </Heading>
      </Container>
      {/* 
      <Container>
        <Box as="h2" textAlign="center">
          Contacts
        </Box>
      </Container> */}

      <Container>
        <Filter />
      </Container>

      <Container>
        <ContactList />
      </Container>

      {/* MODAL WINDOW */}

      <Container>
        <ModalDefault>
          <ContactForm />
        </ModalDefault>
      </Container>
    </>
  );
};

export default ContactPage;
