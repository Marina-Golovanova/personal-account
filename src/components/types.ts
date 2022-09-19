import React from "react";

export type IInputUserData = {
  id: string;
  label: string;
  name?: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "tel";
  value?: string;
  errors?: object;
  error?: string;
  validateConfig?: object;
  onChange?: (e: React.ChangeEvent) => void;
};

export type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
};

export type IUserBackData = IUser & { id: number };

export type IUserSignUpData = IUser & { password: string };
