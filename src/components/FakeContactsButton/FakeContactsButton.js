import PropTypes from 'prop-types';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import { fakeContacts } from 'utils/fakeContacts';

const FakeContactsButton = ({
  numberOfContacts = 100,
  buttonName = 'Fake contacts',
}) => {
  const [addContact, { isLoading }] = useAddContactMutation();

  const { data: contacts } = useGetContactsQuery();

  const onClickHendler = async () => {
    if (contacts.length !== 0) {
      alert(
        'Fake contacts can be generated only in empty contacts list. Delete all contacts'
      );
    }

    if (numberOfContacts > 100) {
      alert('Number of fake contacts cannot be over 100');
    }

    for (let i = 0; i < numberOfContacts.length; i++) {
      console.log(fakeContacts[i]);
      //   await addContact(fakeContacts[i]);
    }
  };

  return (
    <button onClick={onClickHendler} disabled={isLoading}>
      {buttonName}
    </button>
  );
};

FakeContactsButton.propTypes = {
  numberOfContacts: PropTypes.number,
  buttonName: PropTypes.string,
};

export default FakeContactsButton;
