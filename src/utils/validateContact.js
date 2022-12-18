export const validateContact = (contact, contacts) => {
  const { id = null, name, phone } = contact;

  const error = {
    status: false,
    message: '',
  };

  //If full contact existed
  const existedContact = contacts.find(
    contact =>
      contact.id !== id && contact.name === name && contact.phone === phone
  );

  if (existedContact) {
    error.status = true;
    error.message = `Name: ${existedContact.name} and phone number: ${existedContact.phone} is already existed in contacts`;
  }

  //If phone nuber existed
  const existedPhoneContact = contacts.find(
    contact => (contact.id !== id && contact.phone) === phone
  );
  if (existedPhoneContact) {
    error.status = true;
    error.message = `Phone number: ${phone} is already belong to contact: ${existedPhoneContact.name}`;
  }

  return error;
};
