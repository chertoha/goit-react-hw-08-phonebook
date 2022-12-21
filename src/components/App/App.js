import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { Navigate, Route, Routes } from 'react-router';
import RegistrationPage from 'pages/RegistrationPage';
import LoginPage from 'pages/LoginPage';
import Layout from 'components/Layout';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';

const App = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const redirectComponent = (
    <Navigate to={isLoggedIn ? 'contacts' : 'login'} replace />
  );

  return isRefreshing ? (
    <div>Checking user... </div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<RedirectPage />} /> */}
        <Route index element={redirectComponent} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={ContactsPage} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={RegistrationPage}
            />
          }
        />
        <Route path="*" element={redirectComponent} />
      </Route>
    </Routes>
  );
};

export default App;
