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
