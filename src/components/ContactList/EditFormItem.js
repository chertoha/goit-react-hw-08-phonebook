import PropTypes from 'prop-types';
import { useContactsFormFields, useSubmitContactForm } from 'hooks';
import {
  useGetContactsQuery,
  useUpdateContactMutation,
} from 'redux/contacts/contactsApi';

import { BsFillPersonFill } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

const EditFormItem = ({ contactId, oldName, oldPhone, onCancel }) => {
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();

  const { name, phone, onChangeHandle } = useContactsFormFields({
    defaultName: oldName,
    defaultPhone: oldPhone,
  });
  const { data: contacts } = useGetContactsQuery();
  const { submitContactHandler } = useSubmitContactForm();

  const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

  const onSubmitHandle = async e => {
    await submitContactHandler(e, {
      contactId: contactId,
      contactList: contacts,
      mutationHandler: updateContact,
    });

    onCancel();
  };

  return (
    <Card bg="red.100" variant="filled" size="sm" as="li">
      <CardHeader>
        <Heading size="sm"> Update contact</Heading>
      </CardHeader>
      <CardBody
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pt={0}
      >
        <Box as="form" w="100%" onSubmit={onSubmitHandle}>
          <Box display="flex" flexWrap="wrap" columnGap={5} rowGap={2}>
            <FormControl flexBasis="200px">
              <InputGroup>
                <InputLeftElement
                  height="100%"
                  pointerEvents="none"
                  children={<Icon as={BsFillPersonFill} color="gray.500" />}
                />
                <Input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={name}
                  onChange={onChangeHandle}
                  placeholder="Name"
                  size="sm"
                  variant="flushed"
                  borderColor="blackAlpha.300"
                />
              </InputGroup>
            </FormControl>

            <FormControl flexBasis="200px">
              <InputGroup>
                <InputLeftElement
                  height="100%"
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.500" />}
                />
                <Input
                  type="tel"
                  name="phone"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  value={phone}
                  onChange={onChangeHandle}
                  placeholder="Phone"
                  size="sm"
                  variant="flushed"
                  borderColor="blackAlpha.300"
                />
              </InputGroup>
            </FormControl>
          </Box>
          <Box
            mt={5}
            display="flex"
            columnGap={3}
            alignItems="center"
            justifyContent={isMobile ? 'flex-start' : 'flex-end'}
          >
            <Button
              type="submit"
              isLoading={isUpdating}
              loadingText="Updating"
              variant="outline"
              colorScheme="black"
              size={isMobile ? 'sm' : 'xs'}
            >
              Update
            </Button>
            <Button
              onClick={onCancel}
              colorScheme="black"
              variant="outline"
              size={isMobile ? 'sm' : 'xs'}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

EditFormItem.propTypes = {
  contactId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  oldName: PropTypes.string.isRequired,
  oldPhone: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditFormItem;
