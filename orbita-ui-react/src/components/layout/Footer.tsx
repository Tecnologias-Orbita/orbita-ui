import { twMerge } from "tailwind-merge";
import type { IWithChildrenComponent } from "../common";

interface FooterProps extends IWithChildrenComponent {
  centered?: boolean;
}

function Container({ children, className, centered, ...props }: FooterProps) {
  return (
    <footer
      className={twMerge(
        "flex flex-col justify-center gap-4 w-full py-2 px-4 bg-white border-t border-t-slate-200",
        centered && "items-center",
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
}

interface GridProps extends IWithChildrenComponent {}

function Grid({ children, className, ...props }: GridProps) {
  return (
    <div className={twMerge("flex flex-wrap gap-4 py-4", className)} {...props}>
      {children}
    </div>
  );
}

interface ColumnProps extends IWithChildrenComponent {
  width?: number | string;
  centered?: boolean;
}

function Column({
  children,
  width,
  className,
  centered,
  ...props
}: ColumnProps) {
  return (
    <ul
      className={twMerge(
        "flex flex-col justify-start gap-2 w-full",
        centered && "items-center",
        width && `w-[${width}]`,
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

interface ItemProps extends IWithChildrenComponent {
  href?: string;
  target?: "self" | "_blank" | "_parent" | "_top";
}

function Item({ children, href, target, className, ...props }: ItemProps) {
  return (
    <li
      className={twMerge(
        "flex items-center gap-2 w-max opacity-75 hover:opacity-100 transition duration-100 ease-in-out",
        className,
      )}
      {...props}
    >
      {href ? (
        <a href={href} target={target}>
          {children}
        </a>
      ) : (
        children
      )}
    </li>
  );
}

interface BottomProps extends Omit<FooterProps, "children"> {
  children?: React.ReactNode;
  copyright?: {
    name: string;
    year: string;
    className?: string;
  };
}

function Bottom({
  children,
  copyright,
  className,
  centered,
  ...props
}: BottomProps) {
  return (
    <aside
      className={twMerge(
        "flex items-center gap-4 w-5/6 py-2 max-w-5xl bg-white border-t border-t-slate-200",
        centered && "justify-center",
        className,
      )}
      {...props}
    >
      {copyright && (
        <p className={twMerge("text-sm opacity-70", className)}>
          &copy; {copyright.year} {copyright.name}
        </p>
      )}
      {children}
    </aside>
  );
}

export default {
  Container,
  Bottom,
  Grid,
  Column,
  Item,
};
