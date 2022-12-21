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
    user && (
      <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
          <FakeContactsButton />
        </div>
      </div>
    )
  );
};

export default Profile;
