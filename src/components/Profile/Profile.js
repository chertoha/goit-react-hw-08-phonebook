import FakeContactsButton from 'components/FakeContactsButton';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogout = () => {
    dispatch(logOut());
  };

  const { name, email } = user;

  // const tempName = 'Anton Chertok Yevgenovich';

  const MAX_LETTERS_NUM = 10;
  let numLetters = window.innerWidth / 3 / 13;
  numLetters = numLetters > MAX_LETTERS_NUM ? MAX_LETTERS_NUM : numLetters;

  const slicedName =
    name.length > numLetters + 3
      ? name.slice(0, numLetters).concat('...')
      : name;

  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="sm">
          {slicedName}
        </MenuButton>
        <MenuList>
          <MenuGroup title={email}>
            <MenuItem onClick={onLogout} fontSize="sm">
              Logout
            </MenuItem>
            <MenuDivider />
            <MenuItem fontSize="sm">
              <FakeContactsButton numberOfContacts={25} />
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Profile;
