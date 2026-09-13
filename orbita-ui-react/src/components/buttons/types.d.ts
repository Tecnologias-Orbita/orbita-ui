import type React from "react";
import type { IWithChildrenComponent } from "../common";

export type BtnProps = {
  link?: boolean;
  href?: string | (() => string);
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  linkComponent?: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  IWithChildrenComponent;

export type BtnType = React.FC<BtnProps>;
