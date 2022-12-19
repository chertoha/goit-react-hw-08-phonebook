import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { Route, Routes } from 'react-router';
import RedirectPage from 'pages/RedirectPage';
import RegistrationPage from 'pages/RegistrationPage';
import LoginPage from 'pages/LoginPage';
import Layout from 'components/Layout';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RedirectPage />} />
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
        <Route path="*" element={<RedirectPage />} />
      </Route>
    </Routes>
  );
};

export default App;
