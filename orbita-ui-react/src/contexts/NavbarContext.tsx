import { createContext, useState, useEffect, useContext } from "react";

type ActiveObject = {
  className?: undefined | string;
  style?: undefined | React.CSSProperties;
};

interface ContextType {
  activePath: string;
  activeObject: ActiveObject;
  setActiveObject: React.Dispatch<React.SetStateAction<ActiveObject>>;
}

const NavbarContext = createContext<ContextType>({
  activePath: "/",
  activeObject: {},
  setActiveObject: () => {},
});

interface ProviderProps {
  children: React.ReactNode;
  classSelector: string;
  autoControlled: boolean | undefined;
}

export function NavbarProvider({
  children,
  classSelector,
  autoControlled = true,
}: ProviderProps) {
  const [activePath, setActivePath] = useState<string>("/");
  const [activeObject, setActiveObject] = useState<ActiveObject>({});

  useEffect(() => {
    if (!autoControlled) return;

    const fn = (e: Event) => {
      let { href } = e.target as HTMLAnchorElement;
      if (URL.canParse(href)) href = new URL(href).pathname;
      setActivePath(href);
    };
    const elements = document.querySelectorAll(`${classSelector} a`);

    elements.forEach((e) => e.addEventListener("click", fn));
    return () => {
      elements.forEach((e) => e.removeEventListener("click", fn));
    };
  }, []);

  useEffect(() => {
    if (!autoControlled) return;

    setActivePath(location.pathname);
  }, []);

  return (
    <NavbarContext.Provider
      value={{ activePath, activeObject, setActiveObject }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  return useContext(NavbarContext);
}
