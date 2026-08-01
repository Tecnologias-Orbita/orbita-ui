import type { Btn as BtnType } from "./types";
import { twMerge } from "tailwind-merge";

const Btn: BtnType = ({
  children,
  className,
  link,
  href,
  target,
  onClick,
  disabled,
  loading,
  ...props
}) => {
  const actualClassName = twMerge(
    "flex gap-2 items-center justify-center rounded-md border border-primary-500/10 bg-white px-4 py-2 text-primary-500 active:scale-95 hover:bg-gray-100 transition duration-300 ease-in-out",
    link && "block",
    (disabled || loading) && "pointer-events-none opacity-50",
    className,
  );

  if (link) {
    if (!href) throw new Error("Link button must have an href");

    return (
      <a href={typeof href === "function" ? href() : href} target={target}>
        {children}
      </a>
    );
  }

  if (!link && !onClick) throw new Error("Button must have an onClick handler");

  return (
    <button className={actualClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Btn;
