import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { LoginPage } from "../pages/login-page";
import { SignUpPage } from "../pages/sign-up-page";
import { Account } from "../pages/account";
import { roots } from "../constants";

import "./styles/theme.scss";
import { IUserBackData } from "../types";

export const App = () => {
  const listFriend: IUserBackData[] = [
    {
      id: 1,
      firstName: "Marina",
      lastName: "Golovanova",
      email: "gma18@list.ru",
      number: "79685153043",
    },
    {
      id: 2,
      firstName: "Anna",
      lastName: "Filipova",
      email: "anna_fil@gmail.com",
      number: "79685153043",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={roots.login} element={<LoginPage />} />
        <Route path={roots.signUp} element={<SignUpPage />} />
        <Route
          path={roots.account}
          element={<Account listFriend={listFriend} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
