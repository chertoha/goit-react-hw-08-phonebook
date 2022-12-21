export const validateContact = (contact, contacts) => {
  const { id = null, name, number } = contact;

  const error = {
    status: false,
    message: '',
  };

  //If full contact existed
  const existedContact = contacts.find(
    contact =>
      contact.id !== id && contact.name === name && contact.number === number
  );

  if (existedContact) {
    error.status = true;
    error.message = `Name: ${existedContact.name} and phone number: ${existedContact.number} is already existed in contacts`;
  }

  //If phone nuber existed
  const existedPhoneContact = contacts.find(
    contact => (contact.id !== id && contact.number) === number
  );
  if (existedPhoneContact) {
    error.status = true;
    error.message = `Phone number: ${number} is already belong to contact: ${existedPhoneContact.name}`;
  }

  return error;
};
