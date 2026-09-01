import { twMerge } from "tailwind-merge";
import type { IWithChildrenComponent } from "../common";
import { useEffect, useRef, useState } from "react";
import { Btn } from "../buttons";
import { BurgerIcon, XIcon } from "../icons";

interface WrapperProps extends IWithChildrenComponent {}

function Wrapper({ children, className, ...props }: WrapperProps) {
  return (
    <div
      className={twMerge("flex w-full h-full relative", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface MainProps extends IWithChildrenComponent {}

function Main({ children, className, ...props }: MainProps) {
  return (
    <main className={twMerge("flex-1 relative", className)} {...props}>
      {children}
    </main>
  );
}

interface SidebarProps extends Omit<IWithChildrenComponent, "children"> {
  children: ((isCollapsed: boolean) => React.ReactNode) | React.ReactNode;
  side?: "left" | "right";
  collapseMode?: "disabled" | "reduced" | "full";
  animated?: boolean;
  switchButton?: (onCollapse: () => void) => React.ReactNode;
  collapsedSwitchButton?: (onCollapse: () => void) => React.ReactNode;
}

function Sidebar({
  children,
  className,
  side = "left",
  collapseMode = "disabled",
  animated = false,
  switchButton,
  collapsedSwitchButton,
  ...props
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const sidebarButtonRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const onCollapse = () => {
    if (sidebarButtonRef.current && isCollapsed && collapseMode === "reduced") {
      sidebarButtonRef.current.classList.replace(
        "justify-center",
        "justify-end",
      );
    }
    if (
      sidebarButtonRef.current &&
      !isCollapsed &&
      collapseMode === "reduced"
    ) {
      timeoutRef.current = setTimeout(() => {
        if (sidebarButtonRef.current) {
          sidebarButtonRef.current.classList.replace(
            "justify-end",
            "justify-center",
          );
        }
        clearTimeout(timeoutRef.current as number);
      }, 75);
    }
    setIsCollapsed((i) => !i);
  };

  useEffect(() => {
    if (isCollapsed && collapseMode === "full") {
      timeoutRef.current = setTimeout(() => {
        if (sidebarButtonRef.current) {
          sidebarButtonRef.current.classList.replace(
            "opacity-0",
            "opacity-100",
          );
        }
        clearTimeout(timeoutRef.current as number);
      }, 200);
    }
  }, [isCollapsed, collapseMode]);

  const collapseState =
    collapseMode === "full" && isCollapsed
      ? 0
      : collapseMode === "reduced" && isCollapsed
        ? 1
        : 2;

  return (
    <>
      <aside
        className={twMerge(
          "flex flex-col flex-wrap bg-white relative",
          animated && "transition-[width] duration-100 ease-in",
          {
            0: "w-0",
            1: [
              "w-20 overflow-auto",
              {
                left: "border-r border-r-slate-200",
                right: "border-l border-l-slate-200",
              }[side],
              className,
            ],
            2: [
              "w-xs overflow-auto",
              {
                left: "border-r border-r-slate-200",
                right: "border-l border-l-slate-200",
              }[side],
              className,
            ],
          }[collapseState],
        )}
        {...props}
      >
        {collapseState === 0 && (
          <div
            ref={sidebarButtonRef}
            className={twMerge(
              "absolute top-4 z-10 opacity-0 transition-opacity duration-75",
              {
                left: "left-full translate-x-4",
                right: "right-full -translate-x-4",
              }[side],
            )}
          >
            {collapsedSwitchButton?.(onCollapse) ??
              switchButton?.(onCollapse) ?? (
                <Btn
                  onClick={onCollapse}
                  className="p-2 min-w-max w-10 aspect-square grid place-items-center"
                >
                  <BurgerIcon size={24} />
                </Btn>
              )}
          </div>
        )}
        {collapseMode !== "disabled" && (
          <>
            {switchButton?.(onCollapse) ?? (
              <div
                ref={sidebarButtonRef}
                className="p-2 flex justify-end transition-transform duration-75"
              >
                <Btn
                  onClick={onCollapse}
                  className="p-2 min-w-max w-10 aspect-square grid place-items-center"
                >
                  {collapseState === 1 ? (
                    <BurgerIcon size={24} />
                  ) : (
                    <XIcon size={24} />
                  )}
                </Btn>
              </div>
            )}
            {typeof children === "function" ? children(isCollapsed) : children}
          </>
        )}
      </aside>
    </>
  );
}

export default {
  Wrapper,
  Main,
  Sidebar,
};
