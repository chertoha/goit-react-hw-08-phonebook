// import Box from 'components/Box';
import ContactListItem from './ContactListItem';
import EditFormItem from './EditFormItem';
import Spinner from 'components/Spinner';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { useState } from 'react';
import { filterObjectsList } from 'utils/filterObjectsList';
import { selectFilter } from 'redux/filter/selectors';
import { Box } from '@chakra-ui/react';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const [editedId, setEditedId] = useState(null);

  // console.log(contacts);

  if (isLoading) {
    return (
      <Box textAlign="center">
        <Spinner type={Spinner.type.DEFAULT} />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error.data}</div>;
  }

  const visibleContacts = filterObjectsList(filter, contacts, 'name');

  if (visibleContacts.length === 0) return <p>No contacts</p>;

  return (
    <Box border="1px solid" borderColor="gray.300" borderRadius={5}>
      {contacts.length > 0 ? (
        <ul>
          {visibleContacts.map(({ id, name, number }) => {
            if (id === editedId) {
              return (
                <EditFormItem
                  key={id}
                  contactId={id}
                  oldName={name}
                  oldPhone={number}
                  onCancel={() => {
                    setEditedId(null);
                  }}
                />
              );
            }

            return (
              <ContactListItem
                key={id}
                id={id}
                name={name}
                phone={number}
                onEdit={() => {
                  setEditedId(id);
                }}
              />
            );
          })}
        </ul>
      ) : (
        <p>There are no contacts yet here</p>
      )}
    </Box>
  );
};

export default ContactList;
