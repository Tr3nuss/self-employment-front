import { AuthPage } from "./pages/auth/auth";
import { RegisterPage } from "./pages/register/register";
import { RecPasswordPage } from "./pages/pass-rec/recpass";
import { Routes, Route } from "react-router-dom";
import { ProfilePage } from "./components/profilePage/profile";
import { LayoutPage } from "./layout";
import { CustomersPage } from "./components/customerPage/customers";
import { NaturalPersonPage } from "./components/customerPage/customersTypes/naturalPerson";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/layout" element={<LayoutPage />}>
          <Route index element={<ProfilePage />} />
          <Route path="customers" element={<CustomersPage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/recpass" element={<RecPasswordPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
