import {
  Btn,
  Footer,
  Navbar,
  Sidebar,
} from "@tecnologias-orbita/orbita-ui-react";
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
      <Sidebar.Wrapper>
        <Sidebar.Sidebar
          collapseMode="full"
          animated
          collapsedSwitchButton={(onCollapse: () => void) => (
            <Btn
              onClick={onCollapse}
              className="bg-red-50 text-red-800 border-red-800 hover:bg-red-100"
            >
              Cerrar
            </Btn>
          )}
        >
          Hola
        </Sidebar.Sidebar>
        <Sidebar.Main>
          <div className="grid h-screen place-items-center bg-gray-100">
            <h1 className="text-7xl">Hola</h1>
            <Btn onClick={() => setState((i) => i + 1)}>
              Presiona para decir hola {state} {state > 1 ? "veces" : "vez"}
            </Btn>
          </div>
        </Sidebar.Main>
        <Sidebar.Sidebar side="right" collapseMode="reduced" animated>
          {(isCollapsed: boolean) => (
            <>Hola {isCollapsed ? "colapsado" : "abierto"}</>
          )}
        </Sidebar.Sidebar>
      </Sidebar.Wrapper>
      <Footer.Container centered>
        <Footer.Grid className="w-full max-w-5xl text-sm">
          <Footer.Column width="50%">
            <Footer.Item href="/">Inicio</Footer.Item>
            <Footer.Item href="/components">Componentes</Footer.Item>
            <Footer.Item
              href="https://github.com/Tecnologias-Orbita/orbita-ui"
              target="_blank"
            >
              GitHub
            </Footer.Item>
          </Footer.Column>
          <Footer.Column width="50%">
            <Footer.Item href="/utilities">Utilidades</Footer.Item>
            <Footer.Item href="/utilities">Utilidades</Footer.Item>
          </Footer.Column>
        </Footer.Grid>
        <Footer.Bottom
          centered
          copyright={{
            name: "Tecnologías Órbita",
            year: "2026",
          }}
        >
          <p className="text-sm opacity-70">
            Hecho con cariño por Tecnologías Órbita
          </p>
        </Footer.Bottom>
      </Footer.Container>
    </>
  );
}
