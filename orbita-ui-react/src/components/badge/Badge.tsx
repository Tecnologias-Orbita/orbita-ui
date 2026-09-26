import { twMerge } from "tailwind-merge";
import type { IWithChildrenComponent } from "../common";

export default function Badge({
  children,
  className,
  ...props
}: IWithChildrenComponent) {
  return (
    <span
      aria-label="badge"
      aria-roledescription="badge"
      className={twMerge(
        "py-1 px-2 rounded-md bg-black/10 border border-black",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
