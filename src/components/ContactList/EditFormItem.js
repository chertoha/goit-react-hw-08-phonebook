import PropTypes from 'prop-types';
import Button from 'components/Button';
import Spinner from 'components/Spinner';
import { ListItem } from './ContactList.styled';
import { useContactsFormFields, useSubmitContactForm } from 'hooks';
import {
  useGetContactsQuery,
  useUpdateContactMutation,
} from 'redux/contactsApi';
import {
  EditForm,
  Field,
  FieldWrapper,
  Label,
  Tools,
} from './EditFormItem.styled';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

const EditFormItem = ({ contactId, oldName, oldPhone, onCancel }) => {
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();

  const { name, phone, onChangeHandle } = useContactsFormFields({
    defaultName: oldName,
    defaultPhone: oldPhone,
  });
  const { data: contacts } = useGetContactsQuery();
  const { submitContactHandler } = useSubmitContactForm();

  const isMobile = useMediaQuery({ query: '(max-width: 479px)' });

  const onSubmitHandle = async e => {
    await submitContactHandler(e, {
      contactId: contactId,
      contactList: contacts,
      mutationHandler: updateContact,
    });

    onCancel();
  };

  return (
    <ListItem>
      <EditForm onSubmit={onSubmitHandle}>
        <FieldWrapper>
          <Label>
            <BsFillPersonFill size="16" />
            <Field
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={onChangeHandle}
            />
          </Label>

          <Label>
            <BsFillTelephoneFill size="14" />
            <Field
              type="tel"
              name="phone"
              value={phone}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={onChangeHandle}
            />
          </Label>
        </FieldWrapper>

        <Tools>
          <Button
            type="submit"
            disabled={isUpdating}
            size={isMobile ? 'lg' : 'md'}
          >
            Update
            {isUpdating && <Spinner type={Spinner.type.BUTTON} />}
          </Button>

          <Button
            type="button"
            onClick={onCancel}
            size={isMobile ? 'lg' : 'md'}
          >
            Cancel
          </Button>
        </Tools>
      </EditForm>
    </ListItem>
  );
};

EditFormItem.propTypes = {
  contactId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  oldName: PropTypes.string.isRequired,
  oldPhone: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditFormItem;
