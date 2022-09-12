import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { LoginPage } from "../pages/login-page";
import { SignUpPage } from "../pages/sign-up-page";
import { Account } from "../pages/account";
import { roots } from "../constants";

import "./styles/theme.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={roots.login} element={<LoginPage />} />
        <Route path={roots.signUp} element={<SignUpPage />} />
        <Route path={roots.account} element={<Account listFriend={[]} />} />
      </Routes>
    </BrowserRouter>
  );
};
