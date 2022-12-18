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
    const phone = form.elements.phone.value;

    try {
      const contact = { id: contactId, name, phone };

      const validateError = validateContact(contact, contactList);
      if (validateError.status) {
        throw new Error(validateError.message);
      }

      const updatedContact = contactId ? contact : { name, phone };

      await mutationHandler(updatedContact);
      success();
    } catch (error) {
      failure(`${error}`);
    }

    resetFields && resetFields();
  };

  return { submitContactHandler };
};
