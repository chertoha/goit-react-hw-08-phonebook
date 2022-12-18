import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import Box from '../Box';

const App = () => {
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

export default App;
