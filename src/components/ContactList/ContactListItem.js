import PropTypes from 'prop-types';
// import Box from 'components/Box';
// import Button from 'components/Button';
// import Spinner from 'components/Spinner';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import {
  ListItem,
  Name,
  Number,
  ContactWrapper,
  ToolsWrapper,
} from './ContactList.styled';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import { useMediaQuery } from 'react-responsive';
import { success } from 'utils/notification';
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

  const isMobile = useMediaQuery({ query: '(max-width: 479px)' });

  useEffect(() => {
    isSuccess && success();
  }, [isSuccess]);

  // return (
  //   <li>
  //     <div>
  //       <div>
  //         <Box as="span">
  //           <BsFillPersonFill size={14} />
  //         </Box>
  //         {name}
  //       </div>
  //       <div>
  //         <Box as="span">
  //           <BsFillTelephoneFill size={12} />
  //         </Box>

  //         {phone}
  //       </div>
  //     </div>

  //     <div>
  //       <Button size={isMobile ? 'lg' : 'xs'} type="button" onClick={onEdit}>
  //         {/* Edit */}
  //         <GrEdit size={isMobile ? '20' : '14'} />
  //       </Button>
  //       <Button
  //         size={isMobile ? 'lg' : 'xs'}
  //         type="button"
  //         onClick={() => {
  //           deleteContact(id);
  //         }}
  //         disabled={isDeleting}
  //       >
  //         {/* Delete */}

  //         {isDeleting ? (
  //           <Spinner type={Spinner.type.BUTTON} />
  //         ) : (
  //           <RiDeleteBin6Line size={isMobile ? '20' : '14'} />
  //         )}
  //       </Button>
  //     </div>
  //   </li>
  // );

  return (
    <Card variant="filled" size="sm">
      <CardHeader>
        <Heading size="sm"> {name}</Heading>
      </CardHeader>
      <CardBody
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" columnGap={2}>
          <PhoneIcon boxSize={3} />
          <Text>
            <a href={`tel: ${phone}`}>{phone}</a>
          </Text>
        </Box>
        <Box display="flex" alignItems="center" columnGap={2}>
          <Button colorScheme="teal" variant="solid" onClick={onEdit} size="xs">
            <EditIcon />
          </Button>
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={() => {
              deleteContact(id);
            }}
            isLoading={isDeleting}
            size="xs"
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
