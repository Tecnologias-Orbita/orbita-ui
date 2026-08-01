import type React from "react";

export type BtnProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string | (() => string);
  link?: boolean;
  href?: string | (() => string);
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type Btn = React.FC<BtnProps>;
