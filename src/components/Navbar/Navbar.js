import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink to="register">Registration</NavLink>
      <NavLink to="login">Login</NavLink>
      <hr />
    </div>
  );
};

export default Navbar;
