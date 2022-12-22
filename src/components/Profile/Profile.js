import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import Container from 'components/Container';
import FakeContactsButton from 'components/FakeContactsButton';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="sm">
            {user.name}
          </MenuButton>
          <MenuList>
            <MenuGroup title={user.email}>
              <MenuItem onClick={onLogout}>Logout</MenuItem>
              <MenuItem>
                <FakeContactsButton numberOfContacts={10} />
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Container>
  );
};

export default Profile;
