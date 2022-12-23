import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useEffect } from 'react';

const ModalDefault = ({ children, isOpen, onClose, shouldCloseModal }) => {
  useEffect(() => {
    if (shouldCloseModal) onClose();
  }, [shouldCloseModal, onClose]);

  return (
    <>
      <Modal isOpen={isOpen} size="md" onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Add new contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

ModalDefault.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalDefault;
