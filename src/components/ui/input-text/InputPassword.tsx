import React from "react";
import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IInputUserData } from "../../types";

export type IPasswordState = {
  value: string;
  showPassword: boolean;
};

export const InputPassword = React.forwardRef<HTMLElement, IInputUserData>(
  function InputPassword(props, ref) {
    const { onChange } = props;

    const [passwordState, setPasswordState] = React.useState<IPasswordState>({
      value: "",
      showPassword: false,
    });

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(event);
        }

        setPasswordState({ ...passwordState, value: event.target.value });
      },
      [passwordState, onChange]
    );

    const handleClickShowPassword = React.useCallback(() => {
      setPasswordState({
        ...passwordState,
        showPassword: !passwordState.showPassword,
      });
    }, [passwordState]);

    const handleMouseDownPassword = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      },
      []
    );

    return (
      <OutlinedInput
        id={props.id}
        name={props.id}
        ref={ref as React.ForwardedRef<HTMLInputElement>}
        type={passwordState.showPassword ? "text" : "password"}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {passwordState.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={props.label}
      />
    );
  }
);
