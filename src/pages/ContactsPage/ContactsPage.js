import ContactList from 'components/ContactList';
import Container from 'components/Container';

import ModalDefault from 'components/ModalDefault';
import ContactForm from 'components/ContactForm';
import { Button, useDisclosure } from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';
import { useMediaQuery } from 'react-responsive';

import { useEffect, useState } from 'react';
import Header from 'components/Header';

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

  const modalOpenButton = (
    <Button onClick={onOpen} colorScheme="green" size="xs" ml={6}>
      New contact
    </Button>
  );

  return (
    <>
      <Container>
        <Header button={modalOpenButton} />
        {/* <Navbar>
          <Logo />
          <Box display="flex" alignItems="center">
            <Box w="60%" mt={1} display="flex">
              <Filter type="flushed" iconRight />
            </Box>
            {!isMobile && modalOpenButton}
          </Box>
        </Navbar> */}
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
          w="50px"
          h="50px"
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
