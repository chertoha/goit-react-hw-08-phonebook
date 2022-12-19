import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';

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
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>
          User name
          <input
            type="text"
            name="username"
            onChange={onChangeHandler}
            value={userName}
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={email}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={password}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <NavLink to="/login">Go to login form </NavLink>
    </div>
  );
};

export default RegistrationForm;
