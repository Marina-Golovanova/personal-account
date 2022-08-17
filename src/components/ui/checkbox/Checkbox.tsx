import React from "react";
import cn from "classnames";
import {
  Checkbox as CheckboxComponent,
  CheckboxProps,
  FormControlLabel,
} from "@mui/material";

import styles from "./checkbox.module.scss";

export type ICheckboxProps = React.HTMLAttributes<HTMLAnchorElement> &
  CheckboxProps & {
    text: string;
    value?: boolean;
    onChange?: (e: React.ChangeEvent) => void;
  };

export const Checkbox = React.forwardRef<HTMLElement, ICheckboxProps>(
  function Checkbox(props, ref) {
    const { className, text, ...attributes } = props;
    return (
      <div className={cn(styles.layout, className)}>
        <FormControlLabel
          control={
            <CheckboxComponent
              ref={ref as React.ForwardedRef<HTMLButtonElement>}
              onChange={props.onChange}
              {...attributes}
              color="secondary"
            />
          }
          label={props.text}
        />
      </div>
    );
  }
);
