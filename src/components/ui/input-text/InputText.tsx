import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { IInputUserData } from "../../types";

import styles from "./input-text.module.scss";
import { InputPassword } from "./InputPassword";

export type IInputProps = IInputUserData;

export const InputText = React.forwardRef<HTMLElement, IInputProps>(
  function InputText(props, ref) {
    return (
      <div className={styles.layout}>
        <FormControl fullWidth={true} color="secondary">
          <InputLabel htmlFor={props.label}>{props.label}</InputLabel>
          {props.type !== "password" && (
            <OutlinedInput
              id={props.id}
              name={props.id}
              inputRef={ref as React.ForwardedRef<HTMLInputElement>}
              placeholder={props.placeholder}
              label={props.label}
              type={props.type}
              onChange={props.onChange}
            />
          )}
          {props.type === "password" && (
            <InputPassword
              ref={ref as React.ForwardedRef<HTMLInputElement>}
              {...props}
            />
          )}
          {!!props.error && (
            <FormHelperText
              className={styles.error}
              error
              id={`${props.label}Error`}
            >
              {props.error}
            </FormHelperText>
          )}
        </FormControl>
      </div>
    );
  }
);
