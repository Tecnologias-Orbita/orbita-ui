export default function NavbarPage() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Navbar</h1>
      <p className="lead">
        A responsive navigation bar component with logo, navigation list, items,
        and dropdown support.
      </p>

      <h2>Overview</h2>
      <p>
        The <code>Navbar</code> component is exported as an object with
        sub-components for flexible composition. It includes a context provider
        for managing active state across navigation items.
      </p>

      <h2>Installation</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Navbar } from "@tecnologias-orbita/orbita-ui-react";`}</code>
      </pre>

      <h2>Sub-components</h2>
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left font-mono">Component</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-mono">Navbar.Container</td>
            <td className="p-3">
              Main wrapper with sticky positioning and context provider
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">Navbar.Logo</td>
            <td className="p-3">Logo container with optional image URL</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">Navbar.List</td>
            <td className="p-3">
              Navigation list with active state management
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">Navbar.Item</td>
            <td className="p-3">
              Navigation item with link, active state, and dropdown support
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Navbar.Container Props</h2>
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left font-mono">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Default</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-mono">children</td>
            <td className="p-3 font-mono">React.ReactNode</td>
            <td className="p-3">Required</td>
            <td className="p-3">Navbar content (Logo, List, etc.)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">autoControlled</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">true</td>
            <td className="p-3">Automatically manage active state from URL</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">HTMLHeaderElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other header props</td>
          </tr>
        </tbody>
      </table>

      <h3>Default Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`sticky top-0 left-0 z-100 flex w-full min-h-16 py-2 px-4 bg-white border-b border-b-slate-200 shadow-sm`}</code>
      </pre>

      <h2>Navbar.Logo Props</h2>
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left font-mono">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Default</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-mono">children</td>
            <td className="p-3 font-mono">React.ReactNode</td>
            <td className="p-3">—</td>
            <td className="p-3">Logo content (overrides logoUrl)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">logoUrl</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Image URL for logo</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">HTMLDivElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other div props</td>
          </tr>
        </tbody>
      </table>

      <h2>Navbar.List Props</h2>
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left font-mono">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Default</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-mono">children</td>
            <td className="p-3 font-mono">React.ReactNode</td>
            <td className="p-3">Required</td>
            <td className="p-3">Navigation items</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">centered</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">false</td>
            <td className="p-3">Center the list horizontally</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">activeClassName</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Class applied to active items</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">activeStyle</td>
            <td className="p-3 font-mono">CSSProperties</td>
            <td className="p-3">—</td>
            <td className="p-3">Inline style applied to active items</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">HTMLNavElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other nav props</td>
          </tr>
        </tbody>
      </table>

      <h3>Default Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`flex items-center gap-4`}</code>
      </pre>

      <h2>Navbar.Item Props</h2>
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left font-mono">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Default</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-mono">children</td>
            <td className="p-3 font-mono">React.ReactNode</td>
            <td className="p-3">Required</td>
            <td className="p-3">Item content</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">href</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Link destination (renders as anchor)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">target</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Anchor target attribute</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">active</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">false</td>
            <td className="p-3">Force active state</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">activeClassName</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Override active class for this item</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">activeStyle</td>
            <td className="p-3 font-mono">CSSProperties</td>
            <td className="p-3">—</td>
            <td className="p-3">Override active style for this item</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">isDropdown</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">false</td>
            <td className="p-3">Enable dropdown mode</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">dropdownItems</td>
            <td className="p-3 font-mono">React.ReactNode[]</td>
            <td className="p-3">—</td>
            <td className="p-3">Dropdown menu items (when isDropdown=true)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">dropdownClassName</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Custom dropdown classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">dropdownStyle</td>
            <td className="p-3 font-mono">CSSProperties</td>
            <td className="p-3">—</td>
            <td className="p-3">Custom dropdown styles</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">dropdownProps</td>
            <td className="p-3 font-mono">HTMLAttributes</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional dropdown props</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">style</td>
            <td className="p-3 font-mono">CSSProperties</td>
            <td className="p-3">—</td>
            <td className="p-3">Inline styles</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">HTMLAnchorElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other anchor props</td>
          </tr>
        </tbody>
      </table>

      <h3>Default Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`flex items-center gap-2 decoration-[none] opacity-75 hover:opacity-100 transition duration-100 ease-in-out`}</code>
      </pre>

      <h2>Usage Examples</h2>

      <h3>Basic Navbar</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Navbar } from "@tecnologias-orbita/orbita-ui-react";

export default function BasicNavbar() {
  return (
    <Navbar.Container>
      <Navbar.Logo logoUrl="/logo.svg" />
      <Navbar.List centered>
        <Navbar.Item href="/">Home</Navbar.Item>
        <Navbar.Item href="/about">About</Navbar.Item>
        <Navbar.Item href="/services">Services</Navbar.Item>
        <Navbar.Item href="/contact">Contact</Navbar.Item>
      </Navbar.List>
    </Navbar.Container>
  );
}`}</code>
      </pre>

      <h3>Navbar with Active State</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Navbar } from "@tecnologias-orbita/orbita-ui-react";

export default function ActiveNavbar() {
  return (
    <Navbar.Container autoControlled>
      <Navbar.Logo logoUrl="/logo.svg" />
      <Navbar.List centered activeClassName="text-primary-600 font-medium">
        <Navbar.Item href="/">Home</Navbar.Item>
        <Navbar.Item href="/about">About</Navbar.Item>
        <Navbar.Item href="/blog">Blog</Navbar.Item>
        <Navbar.Item href="/contact">Contact</Navbar.Item>
      </Navbar.List>
    </Navbar.Container>
  );
}`}</code>
      </pre>

      <h3>Navbar with Dropdown</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Navbar } from "@tecnologias-orbita/orbita-ui-react";

export default function DropdownNavbar() {
  return (
    <Navbar.Container autoControlled>
      <Navbar.Logo logoUrl="/logo.svg" />
      <Navbar.List centered activeClassName="text-primary-600 font-medium">
        <Navbar.Item href="/">Home</Navbar.Item>
        <Navbar.Item
          isDropdown
          dropdownItems={[
            <Navbar.Item key="web" href="/products/web">
              Web Development
            </Navbar.Item>,
            <Navbar.Item key="mobile" href="/products/mobile">
              Mobile Apps
            </Navbar.Item>,
            <Navbar.Item key="ai" href="/products/ai">
              AI Solutions
            </Navbar.Item>,
          ]}
        >
          Products
        </Navbar.Item>
        <Navbar.Item
          isDropdown
          dropdownItems={[
            <Navbar.Item key="about" href="/company/about">About Us</Navbar.Item>,
            <Navbar.Item key="careers" href="/company/careers">Careers</Navbar.Item>,
            <Navbar.Item key="press" href="/company/press">Press</Navbar.Item>,
          ]}
        >
          Company
        </Navbar.Item>
        <Navbar.Item href="/contact">Contact</Navbar.Item>
      </Navbar.List>
    </Navbar.Container>
  );
}`}</code>
      </pre>

      <h3>Navbar with Custom Active Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Navbar } from "@tecnologias-orbita/orbita-ui-react";

export default function CustomActiveNavbar() {
  return (
    <Navbar.Container>
      <Navbar.Logo logoUrl="/logo.svg" />
      <Navbar.List
        centered
        activeClassName="relative"
        activeStyle={{ color: "#2563eb" }}
      >
        <Navbar.Item href="/">Home</Navbar.Item>
        <Navbar.Item href="/about">About</Navbar.Item>
        <Navbar.Item href="/contact">Contact</Navbar.Item>
      </Navbar.List>
    </Navbar.Container>
  );
}`}</code>
      </pre>

      <h3>Navbar with Custom Item Styling</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Navbar } from "@tecnologias-orbita/orbita-ui-react";

export default function StyledNavbar() {
  return (
    <Navbar.Container className="bg-gray-900 border-b-gray-700">
      <Navbar.Logo className="text-white font-bold text-xl">
        MyApp
      </Navbar.Logo>
      <Navbar.List centered className="text-gray-300">
        <Navbar.Item
          href="/"
          className="hover:text-white px-3 py-2 rounded-md hover:bg-gray-800"
        >
          Home
        </Navbar.Item>
        <Navbar.Item
          href="/dashboard"
          className="hover:text-white px-3 py-2 rounded-md hover:bg-gray-800"
        >
          Dashboard
        </Navbar.Item>
        <Navbar.Item
          href="/settings"
          className="hover:text-white px-3 py-2 rounded-md hover:bg-gray-800"
        >
          Settings
        </Navbar.Item>
      </Navbar.List>
    </Navbar.Container>
  );
}`}</code>
      </pre>

      <h3>Manual Active Control</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Navbar } from "@tecnologias-orbita/orbita-ui-react";
import { useState } from "react";

export default function ManualNavbar() {
  const [activePage, setActivePage] = useState("/");

  return (
    <Navbar.Container autoControlled={false}>
      <Navbar.Logo logoUrl="/logo.svg" />
      <Navbar.List centered>
        <Navbar.Item
          href="/"
          active={activePage === "/"}
          onClick={(e) => {
            e.preventDefault();
            setActivePage("/");
          }}
        >
          Home
        </Navbar.Item>
        <Navbar.Item
          href="/about"
          active={activePage === "/about"}
          onClick={(e) => {
            e.preventDefault();
            setActivePage("/about");
          }}
        >
          About
        </Navbar.Item>
      </Navbar.List>
    </Navbar.Container>
  );
}`}</code>
      </pre>

      <h2>Navbar Context</h2>
      <p>
        The Navbar uses a React Context (<code>NavbarContext</code>) to manage
        active state. You can access it using the <code>useNavbar</code> hook:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { useNavbar } from "@tecnologias-orbita/orbita-ui-react";

function MyComponent() {
  const { activePath, activeObject, setActiveObject } = useNavbar();

  return (
    <div>
      <p>Current path: {activePath}</p>
      <button onClick={() => setActiveObject({ className: "custom-active" })}>
        Set Custom Active Style
      </button>
    </div>
  );
}`}</code>
      </pre>

      <h2>TypeScript</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Navbar } from "@tecnologias-orbita/orbita-ui-react";

// Navbar is exported as an object with sub-components
// TypeScript infers the types automatically

// For custom dropdown items
const dropdownItems = [
  <Navbar.Item key="1" href="/item1">Item 1</Navbar.Item>,
  <Navbar.Item key="2" href="/item2">Item 2</Navbar.Item>,
];`}</code>
      </pre>

      <h2>Accessibility</h2>
      <ul>
        <li>
          Uses semantic <code>{"<header>"}</code>, <code>{"<nav>"}</code>, and{" "}
          <code>{"<a>"}</code> elements
        </li>
        <li>
          Dropdown uses <code>{"<ul>"}</code> with proper positioning
        </li>
        <li>
          Active state communicated via visual styling (ensure sufficient
          contrast)
        </li>
        <li>
          Keyboard navigable (Tab to move between items, Enter to activate)
        </li>
        <li>Dropdown appears on hover/focus</li>
      </ul>

      <h2>Related Components</h2>
      <ul>
        <li>
          <a href="/docs/orbita-ui-react/components/sidebar">Sidebar</a> -
          Collapsible sidebar navigation
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/footer">Footer</a> - Page
          footer component
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/btn">Btn</a> - Button
          component for actions
        </li>
      </ul>
    </div>
  );
}
