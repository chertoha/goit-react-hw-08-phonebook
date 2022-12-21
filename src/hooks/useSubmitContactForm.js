import { validateContact } from 'utils/validateContact';
import { success, failure } from 'utils/notification';

export const useSubmitContactForm = () => {
  const submitContactHandler = async (
    event,
    { contactId = null, mutationHandler, contactList = [], resetFields = null }
  ) => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.phone.value;

    try {
      const contact = { id: contactId, name, number };

      const validateError = validateContact(contact, contactList);
      if (validateError.status) {
        throw new Error(validateError.message);
      }

      const updatedContact = contactId ? contact : { name, number };

      await mutationHandler(updatedContact);
      success();
    } catch (error) {
      failure(`${error}`);
    }

    resetFields && resetFields();
  };

  return { submitContactHandler };
};
