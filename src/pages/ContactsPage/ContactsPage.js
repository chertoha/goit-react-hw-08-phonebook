import ContactList from 'components/ContactList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import ModalDefault from 'components/ModalDefault';
import ContactForm from 'components/ContactForm';
import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react';
import Navbar from 'components/Navbar';
import { AddIcon } from '@chakra-ui/icons';
import { useMediaQuery } from 'react-responsive';
import Logo from 'components/Logo';
import { useEffect, useState } from 'react';

const ContactPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

  const [shouldCloseModal, setShouldCloseModal] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setShouldCloseModal(false);
    }
  }, [isOpen]);

  const closeModal = () => {
    setShouldCloseModal(true);
  };

  return (
    <>
      <Container>
        <Navbar>
          <Logo />
          <Box display="flex" alignItems="center">
            <Box w="60%" mt={1} display="flex">
              <Filter type="flushed" iconRight />
            </Box>
            {!isMobile && (
              <Button onClick={onOpen} colorScheme="green" size="xs" ml={6}>
                New contact
              </Button>
            )}
          </Box>
        </Navbar>
      </Container>

      <Container>
        <ContactList />
      </Container>

      <Container>
        <ModalDefault
          isOpen={isOpen}
          onClose={onClose}
          shouldCloseModal={shouldCloseModal}
        >
          <ContactForm onCancel={closeModal} />
        </ModalDefault>
      </Container>

      {isMobile && (
        <Button
          onClick={onOpen}
          w="40px"
          h="40px"
          borderRadius="50%"
          position="fixed"
          bottom="5%"
          right="50%"
          transform="translate(50%)"
          colorScheme="green"
        >
          <AddIcon></AddIcon>
        </Button>
      )}
    </>
  );
};

export default ContactPage;
