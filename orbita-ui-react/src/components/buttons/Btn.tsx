import type { BtnType } from "./types";
import { twMerge } from "tailwind-merge";

const Btn: BtnType = ({
  children,
  className,
  link,
  href,
  target,
  linkComponent,
  onClick,
  disabled,
  loading,
  ...props
}) => {
  const actualClassName = twMerge(
    "flex gap-2 items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-primary-500 active:scale-95 hover:bg-gray-100 transition duration-100 ease-in-out cursor-pointer",
    link && "block",
    (disabled || loading) && "pointer-events-none opacity-50",
    loading && "cursor-wait",
    className,
  );
  const resolvedHref = typeof href === "function" ? href() : href;

  if (link) {
    if (!href) throw new Error("Link button must have an href");

    if (linkComponent) {
      const LinkComponent = linkComponent;

      return (
        <LinkComponent
          href={resolvedHref}
          target={target}
          className={actualClassName}
        >
          {children}
        </LinkComponent>
      );
    }

    return (
      <a href={resolvedHref} target={target} className={actualClassName}>
        {children}
      </a>
    );
  }

  if (!link && !onClick) throw new Error("Button must have an onClick handler");

  return (
    <button
      className={actualClassName}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </button>
  );
};

export default Btn;
