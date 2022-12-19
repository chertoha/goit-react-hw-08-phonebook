import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { Route, Routes } from 'react-router';
import RedirectPage from 'pages/RedirectPage';
import RegistrationPage from 'pages/RegistrationPage';
import LoginPage from 'pages/LoginPage';
import Layout from 'components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RedirectPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="*" element={<RedirectPage />} />
      </Route>
    </Routes>
  );
};

export default App;
