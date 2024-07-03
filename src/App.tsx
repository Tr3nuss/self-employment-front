import { AuthPage } from "./pages/auth/auth";
import { RegisterPage } from "./pages/register/register";
import { RecPasswordPage } from "./pages/pass-rec/recpass";
import { Routes, Route } from "react-router-dom";
import { ProfilePage } from "./components/profilePage/profile";
import { LayoutPage } from "./layout";
import { CustomersPage } from "./components/customerPage/customers";
import { DealPage } from "./components/dealPage/deal";
import { AddDealPage } from "./components/dealPage/dealOptions/addDeal";
import { PaymentPage } from "./components/paymentPage/payments";
import { AddPayments } from "./components/paymentPage/paymentOptions/addPayments";
import { MainPage } from "./mainPage/mainPage";
import { DocumentsPage } from "./components/documentPage/documents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/layout" element={<LayoutPage />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="documents" element={<DocumentsPage />}></Route>
          <Route path="main" element={<MainPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="transactions" element={<DealPage />} />
          <Route path="add_transactions" element={<AddDealPage />} />
          <Route path="payments" element={<AddPayments />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recpass" element={<RecPasswordPage />} />
      </Routes>
    </>
  );
}

export default App;
