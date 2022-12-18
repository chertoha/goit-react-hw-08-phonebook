import Box from 'components/Box';
import ContactListItem from './ContactListItem';
import EditFormItem from './EditFormItem';
import Spinner from 'components/Spinner';
import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactsApi';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { useState } from 'react';
import { filterObjectsList } from 'utils/filterObjectsList';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const [editedId, setEditedId] = useState(null);

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
        <List>
          {visibleContacts.map(({ id, name, phone }) => {
            if (id === editedId) {
              return (
                <EditFormItem
                  key={id}
                  contactId={id}
                  oldName={name}
                  oldPhone={phone}
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
                phone={phone}
                onEdit={() => {
                  setEditedId(id);
                }}
              />
            );
          })}
        </List>
      ) : (
        <p>There are no contacts yet here</p>
      )}
    </Box>
  );
};

export default ContactList;
