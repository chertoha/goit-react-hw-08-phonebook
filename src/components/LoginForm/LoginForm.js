import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';

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
    // console.log(user);
    dispatch(logIn(user));
    resetForm();
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
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

      <NavLink to="/register"> Go to registration form</NavLink>
    </div>
  );
};

export default LoginForm;
