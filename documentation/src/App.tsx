import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import HomePage from "./pages/Home.page";
import { Navbar, Sidebar } from "@tecnologias-orbita/orbita-ui-react";
import DocsRouter from "./docs/Docs.router";
import { DOCS_MAP } from "./docs/docs.map";
import NotFoundPage from "./pages/404.page";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar.Container className="justify-between">
        <Navbar.Logo>Orbita UI Documentation</Navbar.Logo>
        <Navbar.List>
          <Navbar.Item href="/">Home</Navbar.Item>
        </Navbar.List>
      </Navbar.Container>
      <Sidebar.Wrapper>
        <Sidebar.Sidebar>
          <NavLink to="/">Home</NavLink>
          {Object.values(DOCS_MAP).map((pkg) => (
            <>
              <NavLink key={pkg.path} to={pkg.path}>
                {pkg.name}
              </NavLink>
              {Object.values(pkg.childMap || {}).map((segment) => (
                <>
                  <NavLink
                    key={segment.path}
                    to={pkg.path + segment.path}
                    className="indent-2"
                  >
                    {segment.name}
                  </NavLink>
                  {Object.values(segment.childMap || {}).map((page) => (
                    <NavLink
                      key={page.path}
                      to={pkg.path + segment.path + page.path}
                      className="indent-4"
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </>
              ))}
            </>
          ))}
        </Sidebar.Sidebar>
        <Sidebar.Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/docs/:pkg?/:segment?/:page?"
              element={<DocsRouter />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Sidebar.Main>
      </Sidebar.Wrapper>
    </BrowserRouter>
  );
}
