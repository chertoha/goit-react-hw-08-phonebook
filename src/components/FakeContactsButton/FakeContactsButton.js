import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import {
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import { fakeContacts } from 'utils/fakeContacts';

const FakeContactsButton = ({
  numberOfContacts = 100,
  buttonName = 'Fake contacts',
}) => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const { data: contacts } = useGetContactsQuery();

  const onAddHandler = async () => {
    if (numberOfContacts > 100) {
      alert('Number of fake contacts cannot be over 100');
      return;
    }

    for (let i = 0; i < numberOfContacts; i++) {
      await addContact(fakeContacts[i]);
    }
  };

  const onDeleteAllHandler = async () => {
    await contacts.forEach(({ id }) => {
      deleteContact(id);
    });
  };

  if (!contacts) return;

  return contacts.length > 0 ? (
    <Box as="span" onClick={onDeleteAllHandler} disabled={isDeleting} w="100%">
      Delete all contacts
    </Box>
  ) : (
    <Box as="span" onClick={onAddHandler} disabled={isLoading} w="100%">
      {buttonName}
    </Box>
  );
};

FakeContactsButton.propTypes = {
  numberOfContacts: PropTypes.number,
  buttonName: PropTypes.string,
};

export default FakeContactsButton;
