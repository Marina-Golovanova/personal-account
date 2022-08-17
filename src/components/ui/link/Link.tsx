import React from "react";
import cn from "classnames";

import styles from "./link.module.scss";

export type ILinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  target?: string;
  href?: string;
  children: React.ReactNode;
};

export const Link = React.memo(function Link(props: ILinkProps) {
  const { className, children, ...attributes } = props;

  return (
    <a {...attributes} className={cn(styles.link, className)}>
      {children}
    </a>
  );
});
