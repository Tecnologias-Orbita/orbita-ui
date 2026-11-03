import { twMerge } from "tailwind-merge";
import { type IWithChildrenComponent } from "../common";

interface ContainerProps extends IWithChildrenComponent {
  visible?: boolean;
}

function Container({ children, className, visible, ...props }: ContainerProps) {
  return (
    visible && (
      <div
        className={twMerge(
          "fixed z-[10000] w-dvw h-svh top-0 left-0 bg-white",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  );
}

function List({ children, className, ...props }: IWithChildrenComponent) {
  return (
    <ul
      className={twMerge("flex flex-col w-full gap-4 p-2", className)}
      {...props}
    >
      {children}
    </ul>
  );
}

interface ItemProps extends IWithChildrenComponent {
  href?: string;
}

function Item({ children, className, href, ...props }: ItemProps) {
  return (
    <li
      className={twMerge("flex gap-2 px-4 py-2 w-full", className)}
      {...props}
    >
      {href ? (
        <a className="block w-full" href={href}>
          {children}
        </a>
      ) : (
        children
      )}
    </li>
  );
}

export default {
  Container,
  List,
  Item,
};
