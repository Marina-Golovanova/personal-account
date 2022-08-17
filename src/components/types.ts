export type IInputUserData = {
  label: "email" | "password" | "needToRemember";
  placeholder?: string;
  type?: "text" | "password" | "email";
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent) => void;
};
