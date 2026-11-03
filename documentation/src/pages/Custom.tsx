// import { BurgerToXIcon, Navbar } from "@tecnologias-orbita/orbita-ui-react";

import {
  Btn,
  BurgerToXIcon,
  MobileMenu,
} from "@tecnologias-orbita/orbita-ui-react";
import { useState } from "react";

export default function CustomPage() {
  const [active, setActive] = useState(false);

  const onChange = () => {
    setActive((p) => !p);
  };

  return (
    <div className="h-full grid place-items-center gap-4 p-4">
      <Btn onClick={onChange} className="relative z-[20000]">
        <BurgerToXIcon active={active} size={24} />
      </Btn>
      <MobileMenu.Container visible={active}>
        <MobileMenu.List>
          <MobileMenu.Item className="bg-gray-200" href="#">
            Hola
          </MobileMenu.Item>
        </MobileMenu.List>
      </MobileMenu.Container>
    </div>
  );
}
