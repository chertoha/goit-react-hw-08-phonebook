import Container from 'components/Container';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { BsFillPersonFill } from 'react-icons/bs';
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Icon,
  Heading,
} from '@chakra-ui/react';
import { AtSignIcon, LockIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = e => {
    const { name, value } = e.target;
    if (name === 'username') setUserName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const resetForm = () => {
    setUserName('');
    setEmail('');
    setPassword('');
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const { username, email, password } = e.target.elements;
    const user = {
      name: username.value,
      email: email.value,
      password: password.value,
    };
    // console.log(user);
    dispatch(signUp(user));
    resetForm();
  };

  return (
    <Container>
      <Box
        as="form"
        onSubmit={onSubmitHandler}
        p={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          w="100%"
          spacing={6}
          p={7}
          border="1px"
          borderColor="gray.200"
          borderRadius={5}
          // w="400px"
        >
          <Heading as="h1" fontSize="2xl" color="teal">
            Registration form
          </Heading>
          <InputGroup>
            <InputLeftElement
              height="100%"
              pointerEvents="none"
              children={<Icon as={BsFillPersonFill} color="gray.300" />}
            />
            <Input
              type="text"
              name="username"
              variant="outline"
              placeholder="User name"
              onChange={onChangeHandler}
              value={userName}
              size="sm"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              height="100%"
              pointerEvents="none"
              children={<AtSignIcon color="gray.300" />}
            />
            <Input
              type="email"
              name="email"
              variant="outline"
              placeholder="E-mail"
              onChange={onChangeHandler}
              value={email}
              size="sm"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              height="100%"
              pointerEvents="none"
              children={<LockIcon color="gray.300" />}
            />
            <Input
              type="password"
              name="password"
              variant="outline"
              placeholder="Password"
              onChange={onChangeHandler}
              value={password}
              size="sm"
            />
          </InputGroup>

          <Box display="flex" alignItems="center" justifyContent="flex-start">
            <Button
              // isLoading
              loadingText="Submitting"
              colorScheme="teal"
              variant="outline"
              type="submit"
              size="sm"
              pl={6}
              pr={6}
              // width="200px"
            >
              Submit
            </Button>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Link as={ReactLink} to="/login" color="teal.500" fontSize="sm">
              Login
            </Link>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
