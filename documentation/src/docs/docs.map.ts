import type { DocMapType } from "@/types/doc-map";
import UiReactMain from "./orbita-ui-react/page";
import InstallationPage from "./orbita-ui-react/installation/page";
import GettingStartedPage from "./orbita-ui-react/getting-started/page";
import ComponentsPage from "./orbita-ui-react/components/page";
import SeparatorPage from "./orbita-ui-react/components/separator/page";
import BtnPage from "./orbita-ui-react/components/btn/page";
import NavbarPage from "./orbita-ui-react/components/navbar/page";
import FooterPage from "./orbita-ui-react/components/footer/page";
import SidebarPage from "./orbita-ui-react/components/sidebar/page";
import IconsPage from "./orbita-ui-react/components/icons/page";

export const DOCS_MAP: DocMapType = {
  "orbita-ui-react": {
    path: "/docs/orbita-ui-react",
    name: "Orbita UI React",
    component: UiReactMain,
    childMap: {
      installation: {
        path: "/installation",
        name: "Installation",
        component: InstallationPage,
      },
      "getting-started": {
        path: "/getting-started",
        name: "Getting Started",
        component: GettingStartedPage,
      },
      components: {
        path: "/components",
        name: "Components",
        component: ComponentsPage,
        childMap: {
          separator: {
            path: "/separator",
            name: "Separator",
            component: SeparatorPage,
          },
          btn: {
            path: "/btn",
            name: "Btn",
            component: BtnPage,
          },
          navbar: {
            path: "/navbar",
            name: "Navbar",
            component: NavbarPage,
          },
          footer: {
            path: "/footer",
            name: "Footer",
            component: FooterPage,
          },
          sidebar: {
            path: "/sidebar",
            name: "Sidebar",
            component: SidebarPage,
          },
          icons: {
            path: "/icons",
            name: "Icons",
            component: IconsPage,
          },
        },
      },
    },
  },
};