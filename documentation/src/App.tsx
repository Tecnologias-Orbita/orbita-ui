import { Btn, Navbar } from "@orbita-ui/react";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState<number>(1);
  return (
    <>
      <Navbar.Container>
        <Navbar.List
          centered
          activeClassName="opacity-100 bg-black/5 px-2 py-1 rounded-md"
        >
          <Navbar.Item href="/">Inicio</Navbar.Item>
          <Navbar.Item href="/components">Componentes</Navbar.Item>
          <Navbar.Item
            isDropdown
            dropdownItems={[
              <Navbar.Item href="/utilities">Utilidades</Navbar.Item>,
              <Navbar.Item href="/utilities">Utilidades</Navbar.Item>,
            ]}
          >
            Utilidades
          </Navbar.Item>
        </Navbar.List>
      </Navbar.Container>
      <div className="grid h-screen place-items-center bg-gray-100">
        <h1 className="text-7xl">Hola</h1>
        <Btn onClick={() => setState((i) => i + 1)}>
          Presiona para decir hola {state} {state > 1 ? "veces" : "vez"}
        </Btn>
      </div>
    </>
  );
}
