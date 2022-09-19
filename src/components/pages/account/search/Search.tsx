import { Button } from "@mui/material";
import React from "react";
import { InputText } from "../../../ui/input-text";

import styles from "./search.module.scss";

export const Search = React.memo(function Search() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = React.useCallback(() => {
    if (inputRef.current?.value) {
      console.log(inputRef.current.value);
    }
  }, []);

  return (
    <div className={styles.search}>
      <InputText ref={inputRef} id={"asd"} label="Find contacts" />
      <Button variant="contained" color="secondary" onClick={handleSearch}>
        Start search
      </Button>
    </div>
  );
});
