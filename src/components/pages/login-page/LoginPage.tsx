import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { Checkbox } from "../../ui/checkbox";
import { IInputUserData } from "../../types";
import { InputText } from "../../ui/input-text";
import { Link } from "../../ui/link";
import { roots } from "../../constants";

import styles from "./login-page.module.scss";

export type IUserData = {
  email: string;
  password: string;
  needToRemember: boolean;
};

const loginFormFields: IInputUserData[] = [
  {
    id: "email",
    label: "email",
    placeholder: "you@example.com",
    type: "email",
    validateConfig: {
      required: {
        value: true,
        message: "Email should be set!",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email.",
      },
    },
  },
  {
    id: "password",
    label: "password",
    type: "password",
    validateConfig: {
      required: {
        value: true,
        message: "Password should be set!",
      },
    },
  },
];

export const LoginPage = React.memo(function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IUserData>();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.layout}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.header}>Login</div>
        <div className={styles.singUpLink}>
          Doesn't have an account yet?{" "}
          <NavLink to={roots.signUp}>Sing up</NavLink>
        </div>
        {loginFormFields.map((it) => (
          <div key={it.id} className={styles.inputLayout}>
            <InputText
              {...register(it.id as keyof IUserData, it.validateConfig)}
              {...it}
              key={it.id}
              error={errors[it.id as keyof IUserData]?.message}
            />
          </div>
        ))}

        <Link className={styles.forgotPasswordLayout} href="/">
          Forgot password?
        </Link>
        <Checkbox
          className={styles.rememberAgreement}
          text="Remember me"
          {...register("needToRemember")}
        />
        <div className={styles.buttonLayout}>
          <Button
            fullWidth={true}
            variant="contained"
            color="secondary"
            onClick={handleSubmit(onSubmit)}
          >
            login
          </Button>
        </div>
      </form>
    </div>
  );
});
