import React from 'react';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import { useContactsFormFields, useSubmitContactForm } from 'hooks';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { BsFillPersonFill } from 'react-icons/bs';

const ContactForm = ({ onCancel }) => {
  const { name, phone, onChangeHandle, resetFields } = useContactsFormFields({
    defaultName: '',
    defaultPhone: '',
  });
  const { submitContactHandler } = useSubmitContactForm();

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading: isSubmitting }] = useAddContactMutation();

  const onSubmitHandler = async e => {
    await submitContactHandler(e, {
      contactList: contacts,
      mutationHandler: addContact,
      resetFields: resetFields,
    });
    onCancel();
  };

  return (
    <Box
      as="form"
      onSubmit={onSubmitHandler}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack w="100%" spacing={6} pb={6}>
        <FormControl>
          <FormLabel>Contact name</FormLabel>
          <InputGroup>
            <InputLeftElement
              height="100%"
              pointerEvents="none"
              children={<Icon as={BsFillPersonFill} color="gray.300" />}
            />
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={onChangeHandle}
              variant="outline"
              placeholder="Name"
              size="sm"
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Phone number</FormLabel>
          <InputGroup>
            <InputLeftElement
              height="100%"
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={phone}
              onChange={onChangeHandle}
              variant="outline"
              placeholder="Phone"
              size="sm"
            />
          </InputGroup>
        </FormControl>

        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Button
            isLoading={isSubmitting}
            loadingText="Saving"
            colorScheme="teal"
            variant="outline"
            type="submit"
            size="sm"
            pl={6}
            pr={6}
          >
            Save
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactForm;
