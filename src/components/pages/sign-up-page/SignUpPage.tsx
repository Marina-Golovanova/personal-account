import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { IInputUserData, IUserSignUpData } from "../../types";
import { InputText } from "../../ui/input-text";
import { roots } from "../../constants";

import styles from "./sign-up-page.module.scss";

const signUpFields: IInputUserData[] = [
  {
    id: "firstName",
    label: "First name",
    validateConfig: {
      required: {
        value: true,
        message: "Name should be set!",
      },
      pattern: {
        value: /^[A-Z]*$/i,
        message: "The name can only contain Latin letters (A-Z).",
      },
    },
  },
  {
    id: "lastName",
    label: "Last name",
    validateConfig: {
      required: {
        value: true,
        message: "Last name should be set!",
      },
      pattern: {
        value: /^[A-Z]*$/i,
        message: "The last name can only contain Latin letters (A-Z).",
      },
    },
  },
  {
    id: "email",
    label: "email",
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
      minLength: {
        value: 6,
        message: "Password should consist of at least 6 symbols!",
      },
    },
  },
  {
    id: "number",
    label: "number",
    type: "tel",
    validateConfig: {
      required: {
        value: true,
        message: "Number should be set!",
      },
    },
  },
];

export const SignUpPage = React.memo(function SignUpPage() {
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    number: "",
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IUserSignUpData>({
    defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset(defaultValues);
  };

  return (
    <div className={styles.layout}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.header}>Sign up</div>

        <div className={styles.loginLink}>
          Do you already have an account?{" "}
          <NavLink to={roots.login}>Login</NavLink>
        </div>

        {signUpFields.map((it) => (
          <div className={styles.inputLayout} key={it.id}>
            <InputText
              {...register(it.id as keyof IUserSignUpData, it.validateConfig)}
              {...it}
              key={it.id}
              error={errors[it.id as keyof IUserSignUpData]?.message}
            />
          </div>
        ))}

        <div className={styles.buttonLayout}>
          <Button
            fullWidth={true}
            variant="contained"
            color="secondary"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
});
