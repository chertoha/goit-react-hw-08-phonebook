import { NavLink } from 'react-router-dom';
import Profile from 'components/Profile';
import { useAuth } from 'hooks/useAuth';
const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <Profile />
      ) : (
        <div>
          <NavLink to="register">Registration</NavLink>
          <NavLink to="login">Login</NavLink>
        </div>
      )}

      {/* {isLoggedIn && <Profile />} */}
      <hr />
    </div>
  );
};

export default Navbar;
