import { twMerge } from "tailwind-merge";
import { NavbarProvider, useNavbar } from "../../contexts";
import { useEffect } from "react";
import type { IWithChildrenComponent } from "../../common";

const SELECTOR_CLASS = "--navbar_nav";

interface NavbarProps extends IWithChildrenComponent {
  autoControlled?: boolean;
}

function Container({
  children,
  className,
  autoControlled,
  ...props
}: NavbarProps) {
  return (
    <NavbarProvider classSelector={SELECTOR_CLASS}>
      <header
        className={twMerge(
          "sticky top-0 left-0 flex w-full min-h-16 py-2 px-4 bg-white border-b border-b-slate-200 shadow",
          className,
        )}
        {...props}
      >
        {children}
      </header>
    </NavbarProvider>
  );
}

interface LogoProps extends IWithChildrenComponent {
  logoUrl?: string;
}

function Logo({ children, logoUrl, className, ...props }: LogoProps) {
  return (
    <div className={twMerge("flex items-center", className)} {...props}>
      {children ?? <img src={logoUrl} alt="Logo" />}
    </div>
  );
}

interface ListProps extends IWithChildrenComponent {
  centered?: boolean;
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
}

function List({
  children,
  centered,
  className,
  activeClassName,
  activeStyle,
  ...props
}: ListProps) {
  const { setActiveObject } = useNavbar();

  useEffect(() => {
    if (!activeClassName && !activeStyle) return;

    setActiveObject({
      className: activeClassName,
      style: activeStyle,
    });
  }, [activeClassName, activeStyle]);

  return (
    <nav
      className={twMerge(
        "flex items-center gap-4",
        centered && "flex-1 justify-center",
        className,
        SELECTOR_CLASS,
      )}
      {...props}
    >
      {children}
    </nav>
  );
}

interface ItemProps extends IWithChildrenComponent {
  href?: string;
  target?: string;
  active?: boolean;
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
  isDropdown?: boolean;
  dropdownItems?: React.ReactNode[];
  dropdownClassName?: string;
  dropdownStyle?: React.CSSProperties;
  dropdownProps?: React.HTMLAttributes<HTMLUListElement>;
}

function Item({
  children,
  href,
  target,
  active,
  activeClassName,
  activeStyle,
  className,
  style,
  isDropdown,
  dropdownItems,
  ...props
}: ItemProps) {
  const { activePath, activeObject } = useNavbar();
  const isActive = active || href?.trim() === activePath.trim();
  const actualClassName = twMerge(
    "flex items-center gap-2 decoration-[none] opacity-75 hover:opacity-100 transition duration-100 ease-in-out",
    isActive && (activeClassName ?? activeObject.className ?? "opacity-100"),
    className,
  );

  if (isDropdown) {
    return (
      <div className="relative h-full grid place-items-center group cursor-pointer">
        <p className={actualClassName}>{children}</p>
        <Dropdown
          dropdownClassName="absolute top-full left-0 z-10 min-w-72 w-full bg-white rounded-md border border-slate-200 shadow-lg group-hover:grid hidden gap-4 p-4"
          {...props}
        >
          {dropdownItems}
        </Dropdown>
      </div>
    );
  }

  return (
    <a
      className={actualClassName}
      style={isActive ? (activeStyle ?? activeObject.style) : style}
      href={href}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
}

function Dropdown({
  children,
  dropdownClassName,
  dropdownStyle,
  dropdownProps,
  ...props
}: ItemProps) {
  return (
    <ul
      className={dropdownClassName}
      style={dropdownStyle}
      {...{ ...props, ...dropdownProps }}
    >
      {children}
    </ul>
  );
}

export default {
  Container,
  Logo,
  List,
  Item,
};
