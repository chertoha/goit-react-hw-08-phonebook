import Container from 'components/Container';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Link,
  Box,
  Heading,
} from '@chakra-ui/react';

import { AtSignIcon, LockIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const onChangeHandler = e => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };

    dispatch(logIn(user));
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
        >
          <Heading as="h1" fontSize="2xl" color="teal">
            Login form
          </Heading>
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
              loadingText="Submitting"
              colorScheme="teal"
              variant="outline"
              type="submit"
              size="sm"
              pl={6}
              pr={6}
            >
              Submit
            </Button>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Link as={ReactLink} to="/register" color="teal.500" fontSize="sm">
              Registration
            </Link>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginForm;
