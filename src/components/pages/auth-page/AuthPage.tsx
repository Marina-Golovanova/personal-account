import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { Checkbox } from "../../ui/checkbox";
import { IInputUserData } from "../../types";
import { InputText } from "../../ui/input-text";
import { Link } from "../../ui/link";

import styles from "./auth-page.module.scss";

export type IUserData = {
  email: string;
  password: string;
  needToRemember: boolean;
};

const authFormFields: IInputUserData[] = [
  { label: "email", placeholder: "you@example.com", type: "email" },
  {
    label: "password",
    type: "password",
  },
];

export const AuthPage = React.memo(function AuthPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserData>({
    defaultValues: {
      email: "",
      password: "",
      needToRemember: false,
    },
  });

  const onSubmit = (data: any) => console.log(data);

  React.useEffect(() => {
    register("email", {
      validate: (value) =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i) ||
        "Invalid email!",
    });
    register("password", {
      validate: (value) => !!value.length || "You need to enter password!",
    });
  }, [register]);

  return (
    <div className={styles.layout}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.header}>Login</div>
        <div className={styles.singUpLink}>
          Doesn't have an account yet? <Link href="/">Sing up</Link>
        </div>

        {authFormFields.map((it) => (
          <InputText
            {...register(it.label)}
            key={it.label}
            {...it}
            error={errors[it.label]?.message}
          />
        ))}

        <Link className={styles.forgotPasswordLayout} href="/">
          Forgot password?
        </Link>

        <Checkbox
          {...register("needToRemember")}
          className={styles.rememberAgreement}
          text="Remember me"
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
