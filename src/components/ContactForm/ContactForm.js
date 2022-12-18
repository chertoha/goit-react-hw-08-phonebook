import React from 'react';
import Button from 'components/Button';
import Spinner from 'components/Spinner';
import { nanoid } from 'nanoid';
import { FormBlock, FormInput, FormLabel } from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';
import { useContactsFormFields, useSubmitContactForm } from 'hooks';

const ContactForm = () => {
  const { name, phone, onChangeHandle, resetFields } = useContactsFormFields({
    defaultName: '',
    defaultPhone: '',
  });
  const { submitContactHandler } = useSubmitContactForm();

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading: isSubmitting }] = useAddContactMutation();

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  return (
    <FormBlock
      onSubmit={e => {
        submitContactHandler(e, {
          contactList: contacts,
          mutationHandler: addContact,
          resetFields: resetFields,
        });
      }}
    >
      <FormLabel htmlFor={nameInputId}>Name</FormLabel>
      <FormInput
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onChangeHandle}
      />

      <FormLabel htmlFor={phoneInputId}>Phone number</FormLabel>
      <FormInput
        id={phoneInputId}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
        onChange={onChangeHandle}
      />

      <Button type="submit" disabled={isSubmitting} size="md">
        {isSubmitting ? (
          <Spinner type={Spinner.type.BUTTON} />
        ) : (
          <span> Add contact</span>
        )}
      </Button>
    </FormBlock>
  );
};

export default ContactForm;
