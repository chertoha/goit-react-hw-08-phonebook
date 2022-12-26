import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { confirmDelete, success } from 'utils/notification';
import { useEffect } from 'react';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, PhoneIcon } from '@chakra-ui/icons';

const ContactListItem = ({ id, name, phone, onEdit }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess }] =
    useDeleteContactMutation();

  useEffect(() => {
    isSuccess && success();
  }, [isSuccess]);

  return (
    <Card variant="filled" size="sm" as="li">
      <CardHeader>
        <Heading size="sm"> {name}</Heading>
      </CardHeader>
      <CardBody
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pt={0}
        pb={0}
      >
        <Box display="flex" alignItems="center" columnGap={2}>
          <PhoneIcon boxSize={3} />
          <Text>
            <a href={`tel: ${phone}`}>{phone}</a>
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Button variant="ghost" onClick={onEdit} size="md" p={2}>
            <EditIcon />
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              confirmDelete(() => {
                deleteContact(id);
              });
            }}
            isLoading={isDeleting}
            size="md"
            p={2}
          >
            <DeleteIcon />
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ContactListItem;
