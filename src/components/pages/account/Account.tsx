import React from "react";
import { Search } from "./search";
import { IUserBackData } from "../../types";
import { UserTable } from "../../ui/user-table";

import styles from "./account.module.scss";

type IAccountProps = {
  listFriend: IUserBackData[];
};

export const Account = React.memo(function Account(props: IAccountProps) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>My contacts</header>
      {!props.listFriend.length && <div>You haven't contacts yet</div>}

      <div className={styles.searchLayout}>
        <Search />
      </div>

      {props.listFriend.length && (
        <div className={styles.userListLayout}>
          <UserTable userList={props.listFriend} />
        </div>
      )}
    </div>
  );
});
